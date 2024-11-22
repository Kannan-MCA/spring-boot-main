import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { login } from '../service/loginService';
import './../Style/login.css';
const baseURL = 'http://192.168.0.102:8080';
const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const handleRegister = async (event) => {
        event.preventDefault();

        const user = {
            username: email,
            password,
        }

        try {
            const response = await axios.post(`${baseURL}/signup/`, user)

            if (response.status === 200) {
                navigate('/login')
            }
        } catch (error) {
            if (error.response.status === 400) {
                if (error.response.data.username) {
                    setEmailError(error.response.data.username)
                }

                if (error.response.data.password) {
                    setPasswordError(error.response.data.password)
                }
            }
        }
    }

    return (
        <div className="parent-container">
            <div className="mainContainer">
                <div className="titleContainer">
                    <div>Register</div>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        value={fullName}
                        placeholder="Enter your fullname here"
                        onChange={(event) => setFullName(event.target.value)}
                        className="inputBox"
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        value={email}
                        placeholder="Enter your email here"
                        onChange={(event) => setEmail(event.target.value)}
                        className="inputBox"
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        value={password}
                        placeholder="Enter your password here"
                        onChange={(event) => setPassword(event.target.value)}
                        className="inputBox"
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        className="inputButton"
                        type="button"
                        onClick={handleRegister}
                        value="Register"
                    />
                </div>
            </div>
            <div className="imag-container" />
        </div>
    )
}
export default Register;