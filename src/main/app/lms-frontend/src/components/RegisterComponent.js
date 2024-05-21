import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { login } from '../service/loginService';
import './../Style/login.css';
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

        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {},
            body: JSON.stringify(user),
        })
        console.log(response.json())




        /*
              let token = axios.post("http://localhost:8080/auth/login", user);
              console.log(token);
                
              try {
                      let user = {
                          "username": username,
                          "password": password
                      }
                      await login(user);
                      navigate('/home');
                  } catch {
                      navigate('/');
                  }
              */

    };

    return (
        <flex className={'parent-container'}>
            <flex className={'mainContainer'}>
                <div className={'titleContainer'}>
                    <div>Sign-Up</div>
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

export default Register