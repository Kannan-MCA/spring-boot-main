package com.example.librarymanagement.modal;

public class LoginResponse {
	private String token;

    private long expiresIn;

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
