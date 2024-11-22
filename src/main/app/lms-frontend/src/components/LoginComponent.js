import React, { useState, useEffect, useContext } from 'react';
import { useAuth, logout } from '../context/AuthContext';

import './../Style/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { login } = useAuth();

    const handleEmailChange = (event) => {
        const value = event.target.value.trim();
        setEmailError(value === '' ? 'Invalid Email...!' : '');
        setEmail(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value.trim();
        setPasswordError(value === '' ? 'Invalid Password...!' : '');
        setPassword(value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const userInput = {
            email: email.trim(),
            password: password.trim(),
        };

        if (userInput.email !== '' && userInput.password !== '') {
            try {
                const response = await login(userInput);
                if (response.status === 200) {
                    props.history.push('/home');
                }
            } catch (error) {
                setEmailError('Invalid Email or Password');
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
                    <label className="errorLabel" color="alert">{emailError}</label>
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
                    <label color="alert" className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className="inputContainer">
                    <input
                        id="submit"
                        className="inputButton"
                        type="button"
                        onClick={handleLogin}
                        value="Log in"
                    />
                </div>
                <br />
                <label type="button" value="for sign-up" />
            </div>
            <div className="imag-container" />
        </div>
    );
};

export default Login