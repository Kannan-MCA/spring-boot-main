package com.example.librarymanagement.exception;

public class UserNotFound extends RuntimeException {
    UserNotFound(String message) {
        super(message);
    }
}