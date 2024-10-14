import React, { useState, useEffect, useContext } from 'react';
import { useAuth, logout } from '../context/AuthContext';
import { AuthProvider } from '../context/NewAuthContext';

import './../Style/login.css';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [status, updateStatus] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { login } = useAuth();
    const onButtonClick = async (event) => {
        event.preventDefault();
        email.trim == "" ? setEmailError("Invalid Email...!") : "";
        password.trim == "" ? setPasswordError("Invalid Password...!") : "";
        const input = {
            "email": email,
            "password": password
        }
        if (input.email.trim != "" && input.password.trim != "") {
            let status = await login(input);
            updateStatus(status);
        }
    }

    return (
        <div className={'parent-container'}>
            <div className={'mainContainer'}>
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
                    <label className="errorLabel" color='alert'>{emailError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input
                        value={password}
                        placeholder="Enter your password here"
                        type="password"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'inputBox'}
                    />
                    <label color='alert' className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />

                </div>
                <label type="button" value={'for sign-up'} />

            </div>
            <div className='imag-container' />

        </div>
    )
}

export default Login