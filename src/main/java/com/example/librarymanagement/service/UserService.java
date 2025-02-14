package com.example.librarymanagement.service;

import com.example.librarymanagement.modal.User;
import com.example.librarymanagement.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

public class UserService {



    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> allUsers() {
        List<User> users = new ArrayList<>();

        userRepository.findAll().forEach(users::add);

        return users;
    }
}