package com.esp.fizzbuzz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esp.fizzbuzz.model.FizzBuzz;
import com.esp.fizzbuzz.model.Stage;

@Repository
public interface FizzBuzzRepository extends JpaRepository<FizzBuzz, Long> {
	Iterable<FizzBuzz> findByStage(Stage stage);
}