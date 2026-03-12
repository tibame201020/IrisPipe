package irispipe.infrastructure.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import irispipe.model.SupportType;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "iris_pipeline_execution_parameter")
public class PipelineExecutionParameter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "execution_id")
    private Long executionId;

    @Column(name = "sequence_order")
    private Integer sequenceOrder;

    @Column(name = "param_name")
    private String paramName;

    @Lob
    @Column(name = "param_value")
    private String paramValue;

    @Enumerated(EnumType.STRING)
    @Column(name = "param_type")
    private SupportType paramType;
}
