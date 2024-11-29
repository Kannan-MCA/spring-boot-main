package com.example.librarymanagement.modal;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
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
@Table(name = "role")
public class Role extends BaseEntity {
	@Column(name = "role_name")
	private String role_name;
	@OneToOne
	@JsonIgnore
	private User user;
	@ManyToMany(mappedBy = "roles")
	@JsonIgnore
	private Set<User> users = new HashSet<>();

	@OneToMany
	private Set<Department> departments = new HashSet<>();
}