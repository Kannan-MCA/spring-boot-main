package com.example.librarymanagement.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.librarymanagement.modal.Department;
import com.example.librarymanagement.modal.Role;
import com.example.librarymanagement.repository.DepartmentRepository;
import com.example.librarymanagement.repository.RoleRepository;

@Service
public class DepartmentService {
	@Autowired
	DepartmentRepository departmentRepository;

	@Autowired
	RoleRepository roleRepository;

	public Department addDepertment(Department departmentIn) {
		return departmentRepository.save(departmentIn);
	}

	public Department updateDepartment(Department departmentIn) {
		Optional<Department> department = departmentRepository.findById(departmentIn.getId());

		if (department.isPresent()) {
			department.get().setDepartmentName(departmentIn.getDepartmentName());
		}

		return departmentRepository.save(department.get());
	}

	public void deleteDepartment(Department department) {

		departmentRepository.deleteById(department.getId());
	}

	public List<Department> getAll() {
		return departmentRepository.findAll();
	}

	public void assignDepartmentToRole(Integer roleId, Integer departmentId) {
		Set<Role> roleSet = new HashSet<Role>();

		Role role = roleRepository.findById(roleId).get();
		roleSet.add(role);

		Department department = departmentRepository.findById(departmentId).get();
		department.setRoles(roleSet);
		departmentRepository.save(department);
	}

}
