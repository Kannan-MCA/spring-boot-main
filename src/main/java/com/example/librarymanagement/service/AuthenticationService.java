package com.example.librarymanagement.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.librarymanagement.config.LoginUserDto;
import com.example.librarymanagement.config.RegisterUserDto;
import com.example.librarymanagement.modal.User;
import com.example.librarymanagement.repository.UserRepository;

@Service
public class AuthenticationService {
	private final UserRepository userRepository;

	private final PasswordEncoder passwordEncoder;

	private final AuthenticationManager authenticationManager;

	public AuthenticationService(UserRepository userRepository, AuthenticationManager authenticationManager,
			PasswordEncoder passwordEncoder) {
		this.authenticationManager = authenticationManager;
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public User signup(RegisterUserDto input) {
		User user = new User();
		user.setFullName(input.getFullName());
		user.setEmail(input.getEmail());
		user.setPassword(passwordEncoder.encode(input.getPassword()));
		return userRepository.save(user);
	}

	public User authenticate(LoginUserDto loginUserDto) {
		authenticationManager.authenticate(
			new UsernamePasswordAuthenticationToken(loginUserDto.getEmail(), loginUserDto.getPassword())
		);

		return userRepository.findByEmail(loginUserDto.getEmail())
			.orElseThrow(() -> new UsernameNotFoundException("User not found"));
	}
}