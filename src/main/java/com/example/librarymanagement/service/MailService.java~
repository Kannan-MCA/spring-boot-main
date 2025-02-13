package com.example.librarymanagement.service;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
public class JavaMailSender {
    @Autowired private 
    JavaMailSender mailSender;

    public void sendSimpleEmail(String toEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }
}
