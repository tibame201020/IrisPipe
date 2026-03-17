package irispipe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring Boot entry point for the IrisPipe backend application.
 */
@SpringBootApplication
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
