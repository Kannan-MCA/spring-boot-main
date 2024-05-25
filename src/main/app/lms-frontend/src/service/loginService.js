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
    }).catch((error) => alert(`Error: ${error.message}`));
}

//sessionStorage.setItem('token', response.token);
//return Promise.resolve('/');

export const signup = (user) => {
  return axios.post(baseURL, user)
}

export const validateSession=()=>{
  var setupTime = sessionStorage.getItem('setupTime');
  var now = new Date().getTime();
  var elapsedTime = (now-setupTime);

  if(now-setupTime > sessionStorage.getItem('expiresIn')) {
    sessionStorage.clear();
}
}

const authProvider = {
  checkAuth: () => {
    return sessionStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  },
  logout: () => {
    sessionStorage.removeItem('token');
    return Promise.resolve('/login');
  },
  login: ({ requestBody }) => {
    axios
      .post(
        `${baseURL}/auth/login`,
        requestBody
      ).then(response => {
        localStorage.setItem('token', token);

        // Redirect the user to the default route
        return Promise.resolve('/');
      });
  },

};