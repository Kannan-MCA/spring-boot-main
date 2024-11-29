package com.example.librarymanagement.controller;
import com.example.librarymanagement.modal.Exam;
import com.example.librarymanagement.modal.Student;
import com.example.librarymanagement.repository.StudentRepository;
import com.example.librarymanagement.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api")
public class ExamController {

    @Autowired
    private ExamService examService;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/exams")
    public Exam createExam(@RequestBody Exam newExam) {
        return examService.createExam(newExam);
    }

    // Cleaned up code by standardizing variable names, removing debugging statements, improving readability, and more.

    @PostMapping("/exams/{examId}/generate-links")
    public void generateExamLinks(@PathVariable Long examId, @RequestBody List<Student> students, @RequestParam long durationInMinutes) {
        Exam exam = examService.createExam(new Exam());
        examService.generateExamLinks(exam, students, durationInMinutes);
    }

    @GetMapping("/exam/{examId}/{token}")
    public ResponseEntity<String> accessExam(@PathVariable Long examId, @PathVariable String token, @RequestParam String authKey) {
        Student student = studentRepository.findByExamLinkContaining(token);
        if (student != null && student.getAuthKey().equals(authKey)) {
            long currentTime = System.currentTimeMillis();
            if (currentTime <= student.getExpirationTimestamp()) {
                // Authentication and expiration validation successful, provide exam access
                return ResponseEntity.ok("Welcome to the exam!");
            } else {
                // Link has expired
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("This link has expired.");
            }
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid authentication key.");
        }
    }

    @PostMapping("/invalidate-link/{examId}/{token}")
    public ResponseEntity<String> invalidateLink(@PathVariable Long examId, @PathVariable String token, @RequestParam String authKey) {
        Student student = studentRepository.findByExamLinkContaining(token);
        if (student != null && student.getAuthKey().equals(authKey)) {
            student.setExpirationTimestamp(System.currentTimeMillis() - 1);
            studentRepository.save(student);
            return ResponseEntity.ok("Link invalidated.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid authentication key.");
        }
    }
}
