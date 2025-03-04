package com.example.librarymanagement.controller;

import com.example.librarymanagement.modal.Problem;
import com.example.librarymanagement.service.ProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/problems")
public class ProblemController {

    @Autowired
    private ProblemService problemService;

    @GetMapping
    public List<Problem> getAllProblems() {
        return problemService.getAllProblems();
    }

    @PostMapping
    public Problem createProblem(@RequestBody Problem problem) {
        return problemService.createProblem(problem);
    }

    @PutMapping("/{id}")
    public Problem updateProblem(@PathVariable int id, @RequestBody Problem problem) {
        return problemService.updateProblem(id, problem);
    }

    @DeleteMapping("/{id}")
    public void deleteProblem(@PathVariable int id) {
        problemService.deleteProblem(id);
    }
}