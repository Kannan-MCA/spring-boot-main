import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import './../Style/login.css';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (event) => {
        const value = event.target.value.trim();
        setEmailError(value === '' ? 'Email is required' : '');
        setEmail(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value.trim();
        setPasswordError(value === '' ? 'Password is required' : '');
        setPassword(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const credentials = {
            email: email.trim(),
            password: password.trim(),
        };

        if (credentials.email && credentials.password) {
            try {

                await login(credentials);
                navigate('/home');
            } catch (error) {
                setEmailError('Invalid email or password');
            }
        }
    };

    return (
        <div className="parent-container">
            <div className="mainContainer">
                <div className="titleContainer">
                    <div>Login</div>
                </div>
                <br />
                <div className="inputContainer">
                    <input
                        value={email}
                        placeholder="Enter your email here"
                        onChange={handleEmailChange}
                        className="inputBox"
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className="inputContainer">
                    <input
                        value={password}
                        placeholder="Enter your password here"
                        type="password"
                        onChange={handlePasswordChange}
                        className="inputBox"
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className="inputContainer">
                    <input
                        id="submit"
                        className="inputButton"
                        type="button"
                        onClick={handleSubmit}
                        value="Log in"
                    />
                </div>
                <br />
                <div className="inputContainer">
                    <input
                        id="submit"
                        className="input-link"
                        type="button"
                        onClick={() => navigate('/register')}
                        value="To Register"
                    />
                </div>

            </div>
            <div className="imag-container" />
        </div>
    );
};

export default Login