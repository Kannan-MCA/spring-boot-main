package com.example.librarymanagement.repository;

import com.example.librarymanagement.modal.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findByExamLinkContains(String examLink);

    Student findByExamLinkContaining(String token);
}