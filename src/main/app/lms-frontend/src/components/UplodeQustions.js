import React, { useState, useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { login, validateSession } from './../service/loginService';
import FileInput from './../util/FileInput'
import './../Style/uplode.css';

const baseURL = 'http://192.168.0.101:8080';
const UplodeQustion = (props) => {
    return (
        <div className="container">
          <h5>Uplode Your Qustion</h5>
          <ul>
            <li>File formate should be in *.xlsx</li>

            <li>The column title should like </li>

            <li>  qustion | subject | optionOne | optionTwo | optionThree  |optionFour | answer | explination </li>
          </ul>
          <FileInput />
        </div>
      );
}
export default UplodeQustion