import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { listofBooks, deleteBook } from '../service/Service'

const ListBookComponent = () => {

    const [bookList, setBook] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        
    }, [])




    function addNewEmployee() {
        navigate('/add-employee')
    }

    const updateEmployee = (id) => {
        navigate(`/edit-employee/${id}`)
    }

    return (
        <div className="container">
            <br /><br />
            <h2 className="text-center"> List Books </h2>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Books</button>
            <table className="table table-bordered table-striped">
                {/* <thead className="table-dark"> */}
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Title </th>
                        <th> Author </th>
                        <th> Publication </th>
                        <th> Edition</th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map(
                            book =>
                                <tr key={book.id}>
                                    <td> {book.id} </td>
                                    <td> {book.title} </td>
                                    <td>{book.author}</td>
                                    <td>{book.publication}</td>
                                    <td> {book.Edition}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => updateEmployee(book.id)} >Update</button>
                                        <button className="btn btn-danger" onClick={() => removeEmployee(book.id)}
                                            style={{ marginLeft: "10px" }}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListBookComponent