import React, { createContext, useState, useContext, useReducer, Context } from 'react';
const AuthContext = createContext();
const baseURL = 'http://127.0.0.1:8080';
const AuthProvider = ({ children }) => {
    const initialAuthState = {
        isAuthenticated: false,
        user: {
            name: '',
            token: '',
            setupTime: '',
            expiresIn: '',
        },
    };

    const [authState, setAuthState] = useState(initialAuthState);

    const login = async ({ email, password }) => {
        try {
            const res = await fetch(`${baseURL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                throw new Error('Login failed');
            }

            const { token, expiresIn } = await res.json();

            setAuthState(prevState => ({
                ...prevState,
                isAuthenticated: true,
                user: {
                    name: email,
                    token,
                    setupTime: new Date().toISOString(),
                    expiresIn,
                },
            }));
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }
    };

    const logout = () => {
        setAuthState(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};
export { AuthProvider, useAuth };