import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { login } from '../service/loginService';
import './../Style/login.css';
const baseURL = 'http://192.168.0.102:8080';
const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [fullName, setFullName] = useState('')


    const navigate = useNavigate()

    const onButtonClick = async (event) => {
        event.preventDefault();
        let user = {
            "username": email,
            "password": password
        }

        const response = await fetch(baseURL + '/signup/', {
            method: 'POST',
            headers: {},
            body: JSON.stringify(user),
        })
        console.log(response.json())

        return (
            <flex className={'parent-container'}>
                <flex className={'mainContainer'}>
                    <div className={'titleContainer'}>
                        <div>Register</div>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input
                            value={fullName}
                            placeholder="Enter your fullname here"
                            onChange={(ev) => setFullName(ev.target.value)}
                            className={'inputBox'}
                        />
                        <label className="errorLabel">{emailError}</label>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input
                            value={email}
                            placeholder="Enter your email here"
                            onChange={(ev) => setEmail(ev.target.value)}
                            className={'inputBox'}
                        />
                        <label className="errorLabel">{emailError}</label>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className={'inputBox'}
                        />
                        <label className="errorLabel">{passwordError}</label>
                    </div>
                    <br />
                    <div className={'inputContainer'}>
                        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Register'} />
                    </div>

                </flex>
                <div className='imag-container' />

            </flex>
        )
    }
}
export default Register;