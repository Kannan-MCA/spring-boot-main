package com.example.librarymanagement.modal;

public class Judge0Request {

    private String source_code;
    private String language_id;

    // Constructor
    public Judge0Request(String source_code, String language_id) {
        this.source_code = source_code;
        this.language_id = language_id;
    }

    // Getters and Setters
    public String getSource_code() {
        return source_code;
    }

    public void setSource_code(String source_code) {
        this.source_code = source_code;
    }

    public String getLanguage_id() {
        return language_id;
    }

    public void setLanguage_id(String language_id) {
        this.language_id = language_id;
    }
}
