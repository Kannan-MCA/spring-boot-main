package com.example.librarymanagement.service;
import com.example.librarymanagement.modal.Qustion;
import com.example.librarymanagement.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;
    
public void SaveQustions(List<Qustion> qustionList){
    qustionList.forEach(question -> questionRepository.save(question));
}
}