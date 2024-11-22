import React, { useState, useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { login, validateSession } from './../service/loginService';
import FileInput from './../util/FileInput'
import './../Style/uplode.css';

const baseURL = 'http://192.168.0.101:8080';
const UplodeQuestions = () => {
    return (
        <div className="container">
            <h5>Upload Your Questions</h5>
            <ul>
                <li>File format should be in *.xlsx</li>
                <li>The column title should be like: </li>
                <li>question | subject | optionOne | optionTwo | optionThree | optionFour | answer | explanation</li>
            </ul>
            <FileInput />
        </div>
    );
}

export default UplodeQuestions