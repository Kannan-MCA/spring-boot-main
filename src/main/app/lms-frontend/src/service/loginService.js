import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:8080';

export const login = (user) => {
    return axios.post("http://localhost:8080/auth/login",user)
};

export const signup = (user) => {
    return axios.post(BASE_REST_API_URL, user)
}