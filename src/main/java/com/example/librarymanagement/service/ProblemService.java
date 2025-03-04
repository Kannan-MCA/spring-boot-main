package com.example.librarymanagement.service;

import com.example.librarymanagement.modal.Problem;
import com.example.librarymanagement.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemService {
    @Autowired
    ProblemRepository problemRepository;

    public Problem createProblem(Problem problem) {
        return problemRepository.save(problem);

    }

    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }

    public void deleteProblem(int id) {
        problemRepository.deleteById(id);
    }

    public Problem updateProblem(int id, Problem problem) {
        return problemRepository.save(problem);
    }
}