package custom.tibame201020.IrisPipe.batch.entity;

import java.io.Serializable;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BatchJobExecutionParamsId implements Serializable {
    private Long jobExecutionId;
    private String parameterName;
}
