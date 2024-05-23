package com.example.librarymanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.librarymanagement.modal.Department;
import com.example.librarymanagement.service.DepartmentService;

@RestController
@RequestMapping(value = "/meta")
public class DepartmentController {
	@Autowired
	DepartmentService departmentService;

	@PostMapping("/department")
	@ResponseStatus(value = HttpStatus.CREATED)
	public Department createDepartment(@RequestBody Department department) {
		return departmentService.addDepertment(department);
	}

	@PutMapping("/department")
	@ResponseStatus(value = HttpStatus.OK)
	public Department putMethodName(@RequestBody Department department) {
		return departmentService.updateDepartment(department);
	}

	@DeleteMapping("/department")
	@ResponseStatus(value = HttpStatus.OK)
	public void deleteDepartment(@RequestBody Department department) {
		departmentService.deleteDepartment(department);
	}

	@GetMapping("/department")
	@ResponseStatus(value = HttpStatus.OK)
	public List<Department> getById(@RequestParam String param) {
		return departmentService.getAll();
	}

}
