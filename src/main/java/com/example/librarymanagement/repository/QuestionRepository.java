package com.example.librarymanagement.repository;

import com.example.librarymanagement.modal.Qustion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Qustion, Integer> {

}