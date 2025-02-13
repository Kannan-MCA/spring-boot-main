package com.example.librarymanagement.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.librarymanagement.modal.Department;
import com.example.librarymanagement.modal.Role;
import com.example.librarymanagement.repository.DepartmentRepository;
import com.example.librarymanagement.repository.RoleRepository;

@Service
public class RoleService {
	@Autowired
	RoleRepository roleRepository;

	@Autowired
	DepartmentRepository departmentRepository;

	public Role ceateRole(Role role) {
		return roleRepository.save(role);
	}

	public List<Role> getAll() {
		return roleRepository.findAll();
	}

	public void assignDepartmentToRole(Integer roleId, Integer departmentId) {
		Set<Department> departmentSet = new HashSet<Department>();
		Role role = roleRepository.findById(roleId).get();
		Department department = departmentRepository.findById(departmentId).get();
		departmentSet.add(department);
		role.setDepartments(departmentSet);
		roleRepository.save(role);

	}
}
