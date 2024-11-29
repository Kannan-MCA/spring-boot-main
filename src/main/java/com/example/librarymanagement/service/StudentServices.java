package com.example.librarymanagement.service;

import com.example.librarymanagement.modal.Student;
import com.example.librarymanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentServices {
    @Autowired
    private StudentRepository studentRepository;
    public Student createStudent(Student student) { return studentRepository.save(student); }

    public Student getStudentById(Integer id) { return studentRepository.findById(id).orElse(null); }

    public List<Student> getAllStudents() { return studentRepository.findAll(); }
    public Student updateStudent(Integer id, Student student) { if (studentRepository.existsById(id)) { student.setId(id);
        return studentRepository.save(student); } else { return null; } }
    public void deleteStudent(Integer id) { studentRepository.deleteById(id); }
    public void generateExamLink(Student student, Integer examId, long durationInMinutes) { long currentTime = System.currentTimeMillis();
        long expirationTime = currentTime + durationInMinutes * 60 * 1000;
        String token = UUID.randomUUID().toString(); String authKey = UUID.randomUUID().toString();
        String examLink = "http://localhost:8090/exam/" + examId + "/" + token + "?authKey=" + authKey;
        student.setExamLink(examLink);
        student.setAuthKey(authKey); student.setExpirationTimestamp(expirationTime); studentRepository.save(student); }
    public void invalidateExamLink(Student student) {
        student.setExpirationTimestamp(System.currentTimeMillis() - 1);

        studentRepository.save(student);
    }
}