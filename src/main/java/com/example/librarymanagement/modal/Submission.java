package com.example.librarymanagement.modal;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "submissions")
public class Submission extends  BaseEntity {
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "problem_id", nullable = false)
    private Problem problem;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private String language;

    @Column(nullable = false)
    private LocalDateTime submissionTime;

    @Column(nullable = false)
    private boolean isSuccess;
}