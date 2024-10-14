import React, { createContext, useState, useContext, useReducer, Context } from 'react';
const AuthContext = createContext();
const baseURL = 'http://127.0.0.1:8080';
const AuthProvider = ({ children }) => {

    let initialAuthUserObj = {
        name: "",
        token: "",
        setupTime: "",
        expiresIn: ""
    }
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authUser, setUser] = useState(initialAuthUserObj);

    async function login(input) {
        let status = 0;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(input)
        };
        fetch(baseURL + "/auth/login", requestOptions).then(r => r.json().then(data => ({ status: r.status, body: data })))
            .then(obj => {
                status = obj.status
                if (obj.status === 200) {
                    let authUserObj = {
                        name: "",
                        token: "",
                        setupTime: "",
                        expiresIn: ""
                    }

                    authUserObj.name = input.email;
                    authUserObj.token = obj.body.token;
                    authUserObj.expiresIn = obj.body.expiresIn;
                    setIsAuthenticated(true);
                    setUser(authUserObj);
                } else {
                    alert("Login Failed please check ....!");
                }
            })


    };
    const logout = () => {
        setIsAuthenticated(false);
        setUser(initialAuthUserObj);
        return ""
    };
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, authUser }}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
export { AuthProvider, useAuth };