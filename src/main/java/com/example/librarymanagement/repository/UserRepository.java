package com.example.librarymanagement.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.librarymanagement.modal.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}