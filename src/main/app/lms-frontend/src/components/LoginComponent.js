import React, { useState } from 'react';
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

    const onButtonClick = async (event) => {
        event.preventDefault();

        let user = {
            "email": email,
            "password": password
        }
        let response = login(user);
        console.log(response.token);
        navigate('/home');



    };

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