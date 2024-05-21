package com.example.librarymanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.kotlin.CoroutineCrudRepository;
import org.springframework.stereotype.Repository;

import com.example.librarymanagement.modal.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
}