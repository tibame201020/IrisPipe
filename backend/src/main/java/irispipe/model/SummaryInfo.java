package irispipe.model;

import lombok.Data;

import java.util.concurrent.atomic.AtomicLong;

/**
 * Mutable runtime summary counters for one job or step layer.
 */
@Data
public class SummaryInfo {
    public final String name;
    public final SummaryInfoLayer layer;
    public final AtomicLong processed = new AtomicLong(0);
    public final AtomicLong inserted = new AtomicLong(0);
    public final AtomicLong updated = new AtomicLong(0);
    public final AtomicLong deleted = new AtomicLong(0);
    public final AtomicLong total = new AtomicLong(0);

    public SummaryInfo(String name, SummaryInfoLayer layer) {
        this.name = name;
        this.layer = layer;
    }
}
