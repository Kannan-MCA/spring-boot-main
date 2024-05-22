import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateBook, createBook, getBookById } from './../service/Service';

const EmployeeComponent = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [edition, setEdition] = useState('')
    const [publication, setPublication] = useState('')
    const [page, setPage] = useState('')
    const [price, setPrice] = useState('')


    const navigate = useNavigate();
    const { id } = useParams();
    /*
        const saveOrUpdateEmployee = (e) => {
            e.preventDefault();
    
            const employee = {firstName, lastName, email}
    
            console.log(employee);
            if(id){
                updateEmployee(id, employee).then((response) => {
                    navigate('/employees')
                }).catch(error => {
                    console.log(error)
                })
    
            }else{
                createEmployee(employee).then((response) =>{
    
                    console.log(response.data)
        
                    navigate('/employees');
        
                }).catch(error => {
                    console.log(error)
                })
            }
            
        }
        */

    useEffect(() => {

        if (id) {
            getBookById(id).then((response) => {
                setTitle(response.data.title)
                setAuthor(response.data.author)
                setPublication(response.data.publication)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    const pageTitle = () => {

        if (id) {
            return <h2 className="text-center">Update Book</h2>
        } else {
            return <h2 className="text-center">Add Book</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            pageTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Title :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Title"
                                        name="title"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Author :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Author name"
                                        name="author"
                                        className="form-control"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Publication :</label>
                                    <input
                                        type="text"
                                        placeholder="EnterPublication"
                                        name="Publication"
                                        className="form-control"
                                        value={publication}
                                        onChange={(e) => setPublication(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={""} >Submit </button>
                                <button className="btn btn-danger" onClick={""} >Cancel </button>

                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default EmployeeComponent