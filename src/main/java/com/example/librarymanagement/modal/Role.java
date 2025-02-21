package com.example.librarymanagement.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

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

	@ManyToOne
	@JoinColumn(name = "department_id")
	private Department department;

	@ManyToMany(mappedBy = "roles")
	@JsonIgnore
	private Set<User> users;

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

}