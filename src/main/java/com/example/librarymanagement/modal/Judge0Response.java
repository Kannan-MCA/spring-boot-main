package com.example.librarymanagement.modal;

public class Judge0Response {

    private String output;
    private String status;
    private String error;

    // Constructor
    public Judge0Response(String output, String status, String error) {
        this.output = output;
        this.status = status;
        this.error = error;
    }

    // Getters and Setters
    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
