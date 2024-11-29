package com.example.librarymanagement.modal;

public class LoginResponse {
	private String token;

	private long expiresIn;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	private User user;
	private Role role;

	private String department;



	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}



	public String getToken() {
		return token;
	}

	public void setToken(String jwtToken) {
		this.token = jwtToken;
	}

	public void setExpiresIn(long expiresIn) {
		this.expiresIn = expiresIn;
	}

	public long getExpiresIn() {
		return expiresIn;
	}

}
