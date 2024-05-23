package com.example.librarymanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.librarymanagement.modal.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {

}
