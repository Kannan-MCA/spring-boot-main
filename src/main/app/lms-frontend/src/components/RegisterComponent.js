import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './../Style/login.css';
import { MenuItem, Select } from '@mui/material';
const baseURL = 'http://127.0.0.1:8090/auth';
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
            <div className="mainContainer-reg">
                <div className="titleContainer">
                    <div>Register</div>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        value={fullName}
                        placeholder="Full Name"
                        onChange={(event) => setFullName(event.target.value)}
                        className="inputBox"
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        value={email}
                        placeholder="E - Mail"
                        onChange={(event) => setEmail(event.target.value)}
                        className="inputBox"
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        value={password}
                        placeholder="Password"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        className="inputBox"
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>

                <br />
                <div className="inputContainer select">
                    <Select
                        className="inputBox"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Age"
                        onChange={(event) => {

                        }}
                    >
                        
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>

                <br />

                <div className="inputContainer">
                    <input
                        className="inputButton-reg"
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