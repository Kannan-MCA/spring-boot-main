import React, { useState, useEffect } from 'react';
import './../Style/exam.css';
import { Button } from '@mui/material';
import { Label } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1230,
    height: 580,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

const baseURL = 'http://192.168.0.101:8080';
const Exam = (props) => {
    let examObject = {
        title: "Java-Beginer",
        Duriation: "15",
        Subject: "Java Programing",
        TotalnumberofQustions: "150",
        qustionSet: [
            {
            qustion: "Which of the following option leads to the portability and security of Java?",
            answer: "optionOne",
            explination: "The output of the Java compiler is bytecode, which leads to the security and portability of the Java code. It is a highly developed set of instructions that are designed to be executed by the Java runtime system known as Java Virtual Machine (JVM). The Java programs executed by the JVM that makes the code portable and secure. Because JVM prevents the code from generating its side effects. The Java code is portable, as the same byte code can run on any platform.",
            optionOne: "Bytecode is executed by JVM",
            optionTwo: "The applet makes the Java code secure and portable",
            optionThree: "Use of exception handling",
            optionFour: "Dynamic binding between objects"
        },
        {
            qustion: "optionTwo",
            answer: "2",
            explination: "2",
            optionOne: "2",
            optionTwo: "2",
            optionThree: "2",
            optionFour: "2"
        }]
    };

    let examSetObject = {
        candidateId:"",
        departmentId:"",
        subjectId:"",
        examId:"",
        awnwerSet:[{
            qustionId:"",
            answer:"",
            actualAnswer:"",
            timeTakenToPrediction:"",
        }]
    };

    const [exam, setExam] = useState(examObject);
    const [examSet, setExamSet] = useState(examSetObject);



    const [currentindex, setIndex] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [answervalue, setAnswerValue] = React.useState('');
    const handleChange = (event) => {
        setAnswerValue(event.target.value);

    };

    const nextindex = () => {
        if (currentindex <= exam.qustionSet.length) {
            let index = currentindex + 1;
            setIndex(index);
        }
    }
    const prviousindex = () => {
        if (currentindex > 0) {
            let index = currentindex - 1;
            setIndex(index);
        }

    }

    const validateAnswer = (selected, actule) => {

    }

    return (
        <div className='main-container'>
            <div className='prime-container'>
                <div className='terms'>
                    <label>Name of the Exam : {examObject.name}</label>
                    <label>Duriation : {examObject.Duriation} min</label>
                    <label>Subject : {examObject.Subject}</label>
                    <label>Total Number Of Qustions : {examObject.TotalnumberofQustions}</label>

                </div>


                <Button variant="outlined" onClick={handleOpen}>
                    Start
                </Button>


            </div>
            <div className='prime-container'>
                <div className='terms'>
                    <label>Qustion Tryed : {examObject.name}</label>
                    <label>Wrong Answer : {examObject.Duriation} </label>
                    <label>Score : {examObject.Subject}</label>
                    <label>Score in % : {examObject.Subject}</label>
                </div>


                <Button variant="outlined">
                    Reveal
                </Button>


            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        {exam.qustionSet[currentindex].qustion}
                    </div>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Choose Your Answer</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={answervalue}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="optionOne" control={<Radio />} label={exam.qustionSet[currentindex].optionOne} />
                            <FormControlLabel value="optionTwo" control={<Radio />} label={exam.qustionSet[currentindex].optionTwo} />
                            <FormControlLabel value="optionThree" control={<Radio />} label={exam.qustionSet[currentindex].optionThree} />
                            <FormControlLabel value="optionFour" control={<Radio />} label={exam.qustionSet[currentindex].optionFour} />
                        </RadioGroup>
                    </FormControl>
                    <div className='button-view'>
                        <Button color='success' variant="outlined" onClick={""}>
                            Submit Your Answer
                        </Button>
                    </div>

                    <div className='button-view'>
                        <Button variant="outlined" onClick={prviousindex}>
                            Prvious
                        </Button>
                        <Button variant="outlined" onClick={nextindex}>
                            Next
                        </Button>
                    </div>

                </Box>
            </Modal>



        </div>)
}
export default Exam;