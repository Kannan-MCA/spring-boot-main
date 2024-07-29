import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://192.168.0.102:8080/';

const myHeaders = new Headers();
myHeaders.append("Authorization", "");
const raw = "";

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};



export const listofBooks = () => {

    fetch(EMPLOYEE_BASE_REST_API_URL+'/'+book, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
};

export const createBook = (book) => {
    return axios.post(EMPLOYEE_BASE_REST_API_URL +'/', book)
}

export const getBookById = (bookId) => {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + bookId);
}

export const updateBook = (bookId, book) => {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + bookId, book);
}

export const deleteBook = (bookId) => {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + bookId);
}