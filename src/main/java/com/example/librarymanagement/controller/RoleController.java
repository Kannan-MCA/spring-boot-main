package com.example.librarymanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.librarymanagement.modal.Role;
import com.example.librarymanagement.service.RoleService;

@RestController
@RequestMapping(value = "/meta")
public class RoleController {
	@Autowired
	RoleService roleService;

	@PostMapping("/role")
	public Role createRole(@RequestBody Role entity) {

		return entity;
	}

	@GetMapping("/role")
	public List<Role> getAllRole() {
		return roleService.getAll();
	}
}