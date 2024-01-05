package com.api.API;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;

@SpringBootApplication
@OpenAPIDefinition(info = @io.swagger.v3.oas.annotations.info.Info(title = "API", version = "1.0.0"))

public class ApiApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ApiApplication.class, args);

		// Testowanie połączenia z bazą danych
		DatabaseTester databaseTester = context.getBean(DatabaseTester.class);
		databaseTester.testDatabaseConnection();
	}

}
