package irispipe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * Spring Boot entry point for the IrisPipe backend application.
 */
@SpringBootApplication
@EnableScheduling
public class IrisPipeApplication {

    /**
     * Starts the Spring Boot application.
     *
     * @param args process arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(IrisPipeApplication.class, args);
    }

}
