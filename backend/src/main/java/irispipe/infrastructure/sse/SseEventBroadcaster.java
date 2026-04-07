package irispipe.infrastructure.sse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Thread-safe SSE broadcaster. Maintains global and per-run emitter lists.
 * Heartbeat is sent every 30 seconds to prevent proxy timeouts.
 */
@Component
public class SseEventBroadcaster {

    private final CopyOnWriteArrayList<SseEmitter> globalEmitters = new CopyOnWriteArrayList<>();
    private final ConcurrentHashMap<Long, CopyOnWriteArrayList<SseEmitter>> runEmitters = new ConcurrentHashMap<>();
    private final ObjectMapper objectMapper;

    public SseEventBroadcaster(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    /**
     * Creates a new global emitter subscribed to all run events.
     */
    public SseEmitter subscribeGlobal() {
        SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);
        globalEmitters.add(emitter);
        emitter.onCompletion(() -> globalEmitters.remove(emitter));
        emitter.onTimeout(() -> globalEmitters.remove(emitter));
        emitter.onError(e -> globalEmitters.remove(emitter));
        return emitter;
    }

    /**
     * Creates a new emitter subscribed to events for one specific run.
     */
    public SseEmitter subscribeRun(Long runId) {
        SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);
        runEmitters.computeIfAbsent(runId, k -> new CopyOnWriteArrayList<>()).add(emitter);
        emitter.onCompletion(() -> removeRunEmitter(runId, emitter));
        emitter.onTimeout(() -> removeRunEmitter(runId, emitter));
        emitter.onError(e -> removeRunEmitter(runId, emitter));
        return emitter;
    }

    /**
     * Broadcasts an event to all global subscribers and all subscribers for the given run.
     */
    public void broadcast(Long runId, String eventName, Object data) {
        String json = toJson(data);
        SseEmitter.SseEventBuilder event = SseEmitter.event().name(eventName).data(json);
        sendToAll(globalEmitters, event);
        CopyOnWriteArrayList<SseEmitter> runSpecific = runEmitters.get(runId);
        if (runSpecific != null) {
            sendToAll(runSpecific, event);
        }
    }

    /**
     * Sends a heartbeat to all connected subscribers every 30 seconds.
     */
    @Scheduled(fixedDelay = 30_000)
    public void sendHeartbeat() {
        SseEmitter.SseEventBuilder event = SseEmitter.event().name("heartbeat").data("{}");
        sendToAll(globalEmitters, event);
        runEmitters.values().forEach(emitters -> sendToAll(emitters, event));
    }

    private void sendToAll(List<SseEmitter> emitters, SseEmitter.SseEventBuilder event) {
        List<SseEmitter> dead = new ArrayList<>();
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(event);
            } catch (IOException e) {
                dead.add(emitter);
            }
        }
        emitters.removeAll(dead);
    }

    private void removeRunEmitter(Long runId, SseEmitter emitter) {
        CopyOnWriteArrayList<SseEmitter> list = runEmitters.get(runId);
        if (list != null) {
            list.remove(emitter);
            if (list.isEmpty()) {
                runEmitters.remove(runId);
            }
        }
    }

    private String toJson(Object data) {
        try {
            return objectMapper.writeValueAsString(data);
        } catch (JsonProcessingException e) {
            return "{}";
        }
    }
}
