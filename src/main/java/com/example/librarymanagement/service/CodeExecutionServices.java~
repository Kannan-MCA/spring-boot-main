package com.example.librarymanagement.service;

import com.example.librarymanagement.modal.CodeExecutionResponse;
import com.example.librarymanagement.modal.Judge0Request;
import com.example.librarymanagement.modal.Judge0Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class CodeExecutionServices {
    public CodeExecutionResponse executeCode(String code, String language) {
        // Determine the language ID based on the language
        String languageId = getLanguageId(language);

        // Create a request to the Judge0 API
        Judge0Request judge0Request = new Judge0Request(code, languageId);

        // Call the Judge0 API and get the response
        Judge0Response judge0Response = callJudge0Api(judge0Request);

        // Create CodeExecutionResponse from Judge0Response
        CodeExecutionResponse response = new CodeExecutionResponse(
                judge0Response.getOutput(),
                judge0Response.getStatus(),
                judge0Response.getError()
        );

        return response;
    }

    private Judge0Response callJudge0Api(Judge0Request request) {
        // Logic to call the Judge0 API using RestTemplate or WebClient
        String apiUrl = "https://api.judge0.com/submissions";
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Judge0Response> responseEntity = restTemplate.postForEntity(apiUrl, request, Judge0Response.class);
        return responseEntity.getBody();
    }

    private String getLanguageId(String language) {
        Map<String, String> languageMap = new HashMap<>();
        languageMap.put("java", "62");
        languageMap.put("python", "71");
        languageMap.put("cpp", "54");
        return languageMap.getOrDefault(language, "62"); // Default to Java if not found
    }
}
