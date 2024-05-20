package com.example.librarymanagement.config;

public class RegisterUserDto {
    private String email;
    
    private String password;
    
    private String fullName;
    
    public void setEmail(String email) {
    	this.email=email;
    }
    public String getEmail() {
    	return this.email;
    }
    
    public void setPassword(String password) {
    	this.password = password;
    }
    
    public String getPassword() {
    	return this.password;
    }
    
    public void detFullName(String fullName) {
    	this.fullName= fullName;
    }
    
    public String getFullName() {
    	return this.fullName;
    }
}