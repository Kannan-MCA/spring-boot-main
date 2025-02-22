package com.example.librarymanagement.modal;

public class CodeSubmissionResponse {

    private boolean isCorrect;
    private String output;

    public CodeSubmissionResponse(boolean isCorrect, String output) {
        this.isCorrect = isCorrect;
        this.output = output;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }

    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }
}
