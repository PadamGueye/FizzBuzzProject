package com.esp.fizzbuzz.controller;

import com.esp.fizzbuzz.model.FizzBuzz;
import com.esp.fizzbuzz.model.Stage;
import com.esp.fizzbuzz.service.FizzBuzzService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Arrays;

@WebMvcTest(FizzBuzzController.class)
public class FizzBuzzControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FizzBuzzService fizzBuzzService;

    @Test
    public void testGetFizzBuzzList() throws Exception {
        FizzBuzz fizzBuzz1 = new FizzBuzz(1, "1", Stage.LOW);
        FizzBuzz fizzBuzz2 = new FizzBuzz(2, "2", Stage.LOW);
        FizzBuzz fizzBuzz3 = new FizzBuzz(3, "Fizz", Stage.LOW);
        Iterable<FizzBuzz> fizzBuzzList = Arrays.asList(fizzBuzz1, fizzBuzz2, fizzBuzz3);

        when(fizzBuzzService.getFizzBuzzList()).thenReturn(fizzBuzzList);

        mockMvc.perform(get("/stages"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].digit").value(1))
                .andExpect(jsonPath("$[0].value").value("1"))
                .andExpect(jsonPath("$[0].stage").value("LOW"))
                .andExpect(jsonPath("$[1].digit").value(2))
                .andExpect(jsonPath("$[1].value").value("2"))
                .andExpect(jsonPath("$[1].stage").value("LOW"))
                .andExpect(jsonPath("$[2].digit").value(3))
                .andExpect(jsonPath("$[2].value").value("Fizz"))
                .andExpect(jsonPath("$[2].stage").value("LOW"));
    }

}
