import { useEffect, useEffectEvent } from 'react'

type SseEventType = 'run_started' | 'job_started' | 'job_finished' | 'run_completed' | 'run_failed' | 'run_stopped'

type PipelineEventHandlers = {
  onRunStarted?: (data: unknown) => void
  onJobStarted?: (data: unknown) => void
  onJobFinished?: (data: unknown) => void
  onRunCompleted?: (data: unknown) => void
  onRunFailed?: (data: unknown) => void
  onRunStopped?: (data: unknown) => void
}

const EVENT_HANDLER_MAP: Record<SseEventType, keyof PipelineEventHandlers> = {
  run_started: 'onRunStarted',
  job_started: 'onJobStarted',
  job_finished: 'onJobFinished',
  run_completed: 'onRunCompleted',
  run_failed: 'onRunFailed',
  run_stopped: 'onRunStopped',
}

/**
 * Subscribes to the SSE pipeline event stream. Automatically closes on unmount.
 * If runId is provided, subscribes to run-scoped events (/api/v1/events/runs/{runId}).
 * Otherwise subscribes to the global stream (/api/v1/events/runs).
 * EventSource reconnects automatically on network drops.
 */
export function usePipelineEvents(handlers: PipelineEventHandlers, runId?: number) {
  const dispatchEvent = useEffectEvent((handlerKey: keyof PipelineEventHandlers, payload: unknown) => {
    const handler = handlers[handlerKey] as ((data: unknown) => void) | undefined
    if (!handler) return

    handler(payload)
  })

  useEffect(() => {
    const url = runId != null ? `/api/v1/events/runs/${runId}` : '/api/v1/events/runs'
    let source: EventSource
    try {
      source = new EventSource(url)
    } catch {
      return
    }

    for (const [eventName, handlerKey] of Object.entries(EVENT_HANDLER_MAP) as [SseEventType, keyof PipelineEventHandlers][]) {
      source.addEventListener(eventName, (e: MessageEvent) => {
        try {
          dispatchEvent(handlerKey, JSON.parse(e.data as string))
        } catch {
          dispatchEvent(handlerKey, e.data)
        }
      })
    }

    return () => {
      source.close()
    }
  }, [dispatchEvent, runId])
}
