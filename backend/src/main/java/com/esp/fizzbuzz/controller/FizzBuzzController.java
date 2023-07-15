package com.esp.fizzbuzz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.esp.fizzbuzz.model.FizzBuzz;
import com.esp.fizzbuzz.model.Stage;
import com.esp.fizzbuzz.service.FizzBuzzService;

@RestController
public class FizzBuzzController {
	@Autowired
	FizzBuzzService fizzBuzzService;
	
	@GetMapping("/stages")
	public Iterable<FizzBuzz> getFizzBuzzList(){
		return fizzBuzzService.getFizzBuzzList();
	}
	
	@GetMapping("/stages/{stage}")
    public Iterable<FizzBuzz> getFizzBuzzListByStage(@PathVariable Stage stage) {
        return fizzBuzzService.getFizzBuzzListByStage(stage);
    }
	
	@PutMapping("/stages")
	public Iterable<FizzBuzz> createFizzBuzz(){
		return fizzBuzzService.saveFizzBuzzList();
	}
	
	@DeleteMapping("/stages")
	public void deleteFizzBuzzList() {
		fizzBuzzService.deleteFizzBuzz();
	}
}
