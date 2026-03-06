package custom.tibame201020.IrisPipe.data;

import lombok.Data;

import java.util.concurrent.atomic.AtomicLong;

@Data
public class SummaryInfo {
    public final String name;
    public final SimpleEnum.SummaryInfoLayer layer;
    public final AtomicLong processed = new AtomicLong(0);
    public final AtomicLong inserted = new AtomicLong(0);
    public final AtomicLong updated = new AtomicLong(0);
    public final AtomicLong deleted = new AtomicLong(0);
    public final AtomicLong total = new AtomicLong(0);

    public SummaryInfo(String name, SimpleEnum.SummaryInfoLayer layer) {
        this.name = name;
        this.layer = layer;
    }
}
