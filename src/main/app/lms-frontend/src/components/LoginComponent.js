import React, { useState, useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { login } from './../service/loginService';
import './../Style/login.css';
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()
    useEffect(() => {
        let token = null;
        token = sessionStorage.getItem('token');
        if (token != null) {
            navigate('/home')
        } else {
            navigate('/');
        }
    });


    const onButtonClick = async (event) => {
        event.preventDefault();
        let user = {
            "email": email,
            "password": password
        }
        await login(user).then((res) => {
            if (res.responseCode === 200) {
                sessionStorage.setItem("token", res.response.token);
                navigate('/home');
            } else {
                alert("Login Failed please check ....!")
            }
        })
    }

    return (
        <flex className={'parent-container'}>
            <flex className={'mainContainer'}>
                <div className={'titleContainer'}>
                    <div>Login</div>
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
                    <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />

                </div>
                <label type="button" onClick={onButtonClick} value={'for sign-up'} />

            </flex>
            <div className='imag-container' />

        </flex>
    )
}

export default Login