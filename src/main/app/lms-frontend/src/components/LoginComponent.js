import React, { useState, useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';


import { login, validateSession } from './../service/loginService';
import './../Style/login.css';

const baseURL = 'http://192.168.141.167:8080';
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const onButtonClick = (event) => {

        const input = {
            "email": email,
            "password": password
        }

        event.preventDefault();
        if (input.username !== "" && input.password !== "") {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(input)
            };
            fetch(baseURL + "/auth/login", requestOptions).then(r => r.json().then(data => ({ status: r.status, body: data })))
                .then(obj => {
                    if (obj.status === 200) {
                        sessionStorage.setItem("token", obj.body.token);
                        sessionStorage.setItem('setupTime', new Date().getTime());
                        sessionStorage.setItem('expiresIn', obj.body.expiresIn);
                    } else {
                        alert("Login Failed please check ....!")
                    }
                });


            return;
        }
        alert("pleae provide a valid input");

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
                        type='password'
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'inputBox'}
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />

                </div>
                <label type="button" value={'for sign-up'} />

            </flex>
            <div className='imag-container' />

        </flex>
    )
}

export default Login