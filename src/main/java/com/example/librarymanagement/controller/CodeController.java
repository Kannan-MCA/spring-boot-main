package com.example.librarymanagement.controller;

import com.example.librarymanagement.modal.CodeExecutionResponse;
import com.example.librarymanagement.modal.CodeSubmissionRequest;
import com.example.librarymanagement.modal.CodeSubmissionResponse;
import com.example.librarymanagement.modal.TestCase;
import com.example.librarymanagement.service.CodeExecutionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/code")
public class CodeController {
    @Autowired
    private CodeExecutionServices codeExecutionService;

    @PostMapping("/submit")
    public ResponseEntity<CodeSubmissionResponse> submitCode(@RequestBody CodeSubmissionRequest request) {
        CodeExecutionResponse executionResponse = codeExecutionService.executeCode(request.getCode(), request.getLanguage());

        boolean isCorrect = checkTestCases(executionResponse.getOutput(), request.getTestCases());

        CodeSubmissionResponse response = new CodeSubmissionResponse(isCorrect, executionResponse.getOutput());

        return ResponseEntity.ok(response);
    }

    private boolean checkTestCases(String output, List<TestCase> testCases) {
        for (TestCase testCase : testCases) {
            if (!output.equals(testCase.getExpectedOutput())) {
                return false;
            }
        }
        return true;
    }
}
