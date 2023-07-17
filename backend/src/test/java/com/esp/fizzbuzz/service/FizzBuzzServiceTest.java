package com.esp.fizzbuzz.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.esp.fizzbuzz.model.FizzBuzz;
import com.esp.fizzbuzz.model.Stage;

@SpringBootTest
@RunWith(SpringRunner.class)
class FizzBuzzServiceTest {
	
	@Autowired
	FizzBuzzService fizzBuzzService;
	
	@Test
	public void testCreationFizzBuzz() {
		Iterable<FizzBuzz> savedValue = fizzBuzzService.saveFizzBuzzList();
		
		assertNotNull(savedValue);
			

        savedValue.forEach(fizzBuzz -> {
            if (fizzBuzz.getId() == 1) {
                assertEquals("1", fizzBuzz.getValue());
            } else if (fizzBuzz.getId() == 2) {
                assertEquals("2", fizzBuzz.getValue());
            } else if (fizzBuzz.getId() == 3) {
                assertEquals("Fizz", fizzBuzz.getValue());
            } else if (fizzBuzz.getId() == 5) {
                assertEquals("Buzz", fizzBuzz.getValue());
            } else if (fizzBuzz.getId() == 100) {
                assertEquals("Buzz", fizzBuzz.getValue());
            }
        });
	}
	
	@Test
	public void testGetFizzBuzz() {
        Iterable<FizzBuzz> result = fizzBuzzService.getFizzBuzzList();
        result.forEach(fizzBuzz -> {
            if (fizzBuzz.getId() == 1) {
                assertEquals("1", fizzBuzz.getValue());
            } else if (fizzBuzz.getId() == 2) {
                assertEquals("2", fizzBuzz.getValue());
            } else if (fizzBuzz.getId() == 3) {
                assertEquals("Fizz", fizzBuzz.getValue());
            } else if (fizzBuzz.getId() == 135) {
                assertEquals("FizzBuzzBuzz", fizzBuzz.getValue());
            } else if (fizzBuzz.getId() == 100) {
                assertEquals("Buzz", fizzBuzz.getValue());
            }
        });
	}
	
	@Test
	public void testGetFizzBuzzByStage() {
		Stage stage = Stage.LOW;
		Iterable<FizzBuzz> result = fizzBuzzService.getFizzBuzzListByStage(stage);
		
		result.forEach(fizzBuzz -> {
			assertEquals(Stage.LOW, fizzBuzz.getStage());
		});
		
	}
	
	@Test
	public void testDeleteFizzBuzz() {
		Iterable<FizzBuzz> savedValue = fizzBuzzService.saveFizzBuzzList();
		assertNotNull(savedValue);
		
		fizzBuzzService.deleteFizzBuzz();
		
		Iterable<FizzBuzz> result = fizzBuzzService.getFizzBuzzList();
		
		result.forEach(fizzBuzz -> assertNull(fizzBuzzService.getFizzBuzzListByStage(Stage.LOW)));
		
	}

}
