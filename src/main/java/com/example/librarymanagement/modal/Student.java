package com.example.librarymanagement.modal;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Student extends BaseEntity{
    private String name;
    private String email;
    private String examLink;
    private String authKey;
    private Long expirationTimestamp;
}
