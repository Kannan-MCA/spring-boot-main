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
const Exam = () => {
  const [exam, setExam] = useState({
    title: 'Java-Beginer',
    duration: '15',
    subject: 'Java Programing',
    totalQuestions: '150',
    questionSet: [
      {
        question: 'Which of the following options leads to the portability and security of Java?',
        answer: 'Bytecode is executed by JVM',
        explanation: 'The output of the Java compiler is bytecode, which leads to the security and portability of the Java code. It is a highly developed set of instructions that are designed to be executed by the Java runtime system known as Java Virtual Machine (JVM). The Java programs executed by the JVM that makes the code portable and secure. Because JVM prevents the code from generating its side effects. The Java code is portable, as the same byte code can run on any platform.',
        options: [
          'Bytecode is executed by JVM',
          'The applet makes the Java code secure and portable',
          'Use of exception handling',
          'Dynamic binding between objects',
        ],
      },
    ],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [answerValue, setAnswerValue] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setAnswerValue(event.target.value);
  };

  const nextQuestion = () => {
    if (currentIndex < exam.questionSet.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='main-container'>
      <div className='prime-container'>
        <div className='terms'>
          <label>Name of the Exam: {exam.title}</label>
          <label>Duration: {exam.duration} min</label>
          <label>Subject: {exam.subject}</label>
          <label>Total Number Of Questions: {exam.totalQuestions}</label>
        </div>

        <Button variant='outlined' onClick={handleOpen}>
          Start
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div>
            {exam.questionSet[currentIndex].question}
          </div>
          <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'>
              Choose Your Answer
            </FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
              value={answerValue}
              onChange={handleChange}
            >
              {exam.questionSet[currentIndex].options.map((option) => (
                <FormControlLabel
                  value={option}
                  control={<Radio />}
                  label={option}
                  key={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div className='button-view'>
            <Button color='success' variant='outlined'>
              Submit Your Answer
            </Button>
          </div>

          <div className='button-view'>
            <Button variant='outlined' onClick={previousQuestion}>
              Previous
            </Button>
            <Button variant='outlined' onClick={nextQuestion}>
              Next
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default Exam;