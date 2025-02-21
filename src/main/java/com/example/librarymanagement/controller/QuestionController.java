package com.example.librarymanagement.controller;
import com.example.librarymanagement.modal.Qustion;
import com.example.librarymanagement.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class QuestionController {
    @Autowired
private QuestionService questionService;

    @PostMapping("/upload-questions")
    public void uploadQuestions(@RequestBody List<Qustion> qustionList){
        questionService.SaveQustions(qustionList);
    }
}