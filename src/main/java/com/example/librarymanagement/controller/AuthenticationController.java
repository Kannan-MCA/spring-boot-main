package com.example.librarymanagement.controller;

import com.example.librarymanagement.modal.Role;
import com.example.librarymanagement.repository.RoleRepository;
import com.example.librarymanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.librarymanagement.config.LoginUserDto;
import com.example.librarymanagement.config.RegisterUserDto;
import com.example.librarymanagement.modal.LoginResponse;
import com.example.librarymanagement.modal.User;
import com.example.librarymanagement.service.AuthenticationService;
import com.example.librarymanagement.service.JwtService;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {


	private final JwtService jwtService;

	private final AuthenticationService authenticationService;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
		this.jwtService = jwtService;
		this.authenticationService = authenticationService;
	}

	@PostMapping("/signup")
	public ResponseEntity<String> register(@RequestBody RegisterUserDto registerUserDto) {
		Role role = roleRepository.findById(registerUserDto.getRoleId())
				.orElseThrow(() -> new RuntimeException("Role not found"));
		User registeredUser = authenticationService.signup(registerUserDto);
		Set <Role>  registeredRoles = new HashSet<Role>();

		registeredRoles.add(role);

		registeredUser.setRoles(registeredRoles);
		userRepository.save(registeredUser);
		return ResponseEntity.ok("User registered successfully!");
	}

	@PostMapping("/login")
	public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
		System.out.println(loginUserDto);
		User authenticatedUser = authenticationService.authenticate(loginUserDto);

		String jwtToken = jwtService.generateToken(authenticatedUser);

		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setUser(authenticatedUser);
		loginResponse.setToken(jwtToken);
		loginResponse.setExpiresIn(jwtService.getExpirationTime());

		return ResponseEntity.ok(loginResponse);
	}
}