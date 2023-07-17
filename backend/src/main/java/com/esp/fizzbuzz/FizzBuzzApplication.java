package com.esp.fizzbuzz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@SpringBootApplication
public class FizzBuzzApplication {

	public static void main(String[] args) {
		SpringApplication.run(FizzBuzzApplication.class, args);
	}

}
