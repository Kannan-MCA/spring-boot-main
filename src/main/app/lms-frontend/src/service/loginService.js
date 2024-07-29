import axios from 'axios'
import { json } from 'react-router-dom';



const baseURL = 'http://192.168.0.102:8080/';

export const login = (requestBody) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(requestBody),
    redirect: "follow"
  };
  return fetch(baseURL + "/auth/login", requestOptions)
};

//sessionStorage.setItem('token', response.token);
//return Promise.resolve('/');

export const validateSession = () => {
  var setupTime = sessionStorage.getItem('setupTime');
  var now = new Date().getTime();
  var elapsedTime = (now - setupTime);

  if (now - setupTime > sessionStorage.getItem('expiresIn')) {
    sessionStorage.setItem('token', null);
    sessionStorage.setItem('setupTime', null);
    sessionStorage.clear();
  }
};