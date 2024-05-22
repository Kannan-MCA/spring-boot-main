import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/books';

export const listofBooks = () => {
    return axios.get(EMPLOYEE_BASE_REST_API_URL)
};

export const createBook = (book) => {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, book)
}

export const getBookById = (bookId) => {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + bookId);
}

export const updateBook = (bookId, book) => {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +bookId, book);
}

export const deleteBook = (bookId) => {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + bookId);
}