package com.example.librarymanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.librarymanagement.modal.Role;
import com.example.librarymanagement.repository.RoleRepository;

@Service
public class RoleService {
	@Autowired
	RoleRepository repository;

	public Role ceateRole(Role role) {
		return repository.save(role);
	}

	public List<Role> getAll() {

		return repository.findAll();
	}
}
