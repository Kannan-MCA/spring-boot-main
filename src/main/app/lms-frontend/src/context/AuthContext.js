import React, { createContext, useState, useContext, useReducer, Context } from 'react';
const AuthContext = createContext();
const baseURL = 'http://127.0.0.1:8090';
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


    const login_user = async ({ email: userEmail, password: userPassword }) => {
        const response = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": userEmail, "password": userPassword }),
        });

        const { token, expiresIn } = await response.json();
        const now = new Date().toISOString();

        setAuthState((prevState) => ({
            ...prevState,
            isAuthenticated: true,
            user: { name: userEmail, token, setupTime: now, expiresIn }
        }));

        localStorage.setItem('token', authState.user.token?authState.user.token:"");
    };




    const login = async ({ email, password }) => {
        try {
            const response = await fetch(`${baseURL}/auth/login`,
                {
                    method: 'POST', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                });
            if (!response.ok) { throw new Error('Network response was not ok'); }
            const { token, expiresIn } = await response.json();
            const now = new Date().toISOString();

            localStorage.setItem('token', token);
            setAuthState((prevState) => ({
                ...prevState,
                isAuthenticated: true,
                user: { name: email, token, setupTime: now, expiresIn },
            }));

        } catch (error) {
            setEmailError('Invalid Email or Password'); throw error;
        }
    };

    const logout = () => {
        setAuthState(initialAuthState);
        localStorage.removeItem('token');
        
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
export { AuthProvider, useAuth};