package com.example.librarymanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.librarymanagement.modal.Department;
import com.example.librarymanagement.repository.DepartmentRepository;

@Service
public class DepartmentService {
	@Autowired
	DepartmentRepository departmentRepository;

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

}
