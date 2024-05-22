import axios from 'axios'

const baseURL = 'http://localhost:8080';

export const login = (requestBody: user) => {
    return axios
      .post(
        `${baseURL}/auth/login`,
        requestBody
      )
      .then(response => {
        const respData = {
          responseCode: response.status,
          response: response.data
        };
        return respData;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };


export const signup = (user) => {
    return axios.post(baseURL, user)
}