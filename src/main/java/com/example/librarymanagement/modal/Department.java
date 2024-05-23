package com.example.librarymanagement.modal;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "department")
public class Department extends BaseEntity {
	@Column(name = "department_name")
	private String depaartment_name;

	public void setDepartmentName(String name) {
		this.depaartment_name = name;
	}

	public String getDepartmentName() {
		return this.depaartment_name;
	}

	@JoinTable(name = "department_role_Mapping", joinColumns = @JoinColumn(name = "department_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))

	@ManyToMany
	private Set<Role> roles = new HashSet<Role>();
}