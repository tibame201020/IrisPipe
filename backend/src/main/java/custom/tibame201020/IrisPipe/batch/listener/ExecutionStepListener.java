package custom.tibame201020.IrisPipe.batch.listener;

import org.springframework.batch.core.ExitStatus;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.StepExecutionListener;
import org.springframework.stereotype.Component;

@Component
public class ExecutionStepListener implements StepExecutionListener {

    @Override
    public void beforeStep(StepExecution stepExecution) {
        System.out.println("========================================");
        System.out.println("Step 開始: " + stepExecution.getStepName());
        System.out.println("========================================");
    }

    @Override
    public ExitStatus afterStep(StepExecution stepExecution) {
        System.out.println("========================================");
        System.out.println("Step 結束: " + stepExecution.getStepName());
        System.out.println("狀態: " + stepExecution.getStatus());
        System.out.println("========================================");
        return stepExecution.getExitStatus();
    }
}
