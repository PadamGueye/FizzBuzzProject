package com.esp.fizzbuzz.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name="fizzbuzz")
public class FizzBuzz {
	
	public FizzBuzz() {
	}

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	 @Column(unique = true)
	private int digit;
	
	private String value;
	
	private Stage stage;
	
	

	public FizzBuzz(int digit, String value, Stage stage) {
		super();
		this.digit = digit;
		this.value = value;
		this.stage = stage;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getDigit() {
		return digit;
	}

	public void setDigit(int digit) {
		this.digit = digit;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Stage getStage() {
		return stage;
	}

	public void setStage(Stage stage) {
		this.stage = stage;
	}
	
	
}
