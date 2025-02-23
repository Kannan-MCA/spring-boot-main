import React, { useState } from 'react';
import CodeEditor from  '../editor/editor';
 

function ProblemList() {
    const [problems, setProblems] = useState([
        {
            id: 1,
            description: 'Doctor Appointment',
            completed: false,
        },
        {
            id: 2,
            description: 'Meeting at School',
            completed: true,
        },
    ]);

    const [newProblem, setNewProblem] = useState('');

    const addProblem = (description) => {
        const newProblem = {
            id: Date.now(),
            description,
            completed: false,
        };
        setProblems([...problems, newProblem]);
        setNewProblem('');
    };

    const deleteProblem = (id) => {
        setProblems(problems.filter((problem) => problem.id !== id));
    };

    const toggleProblemCompleted = (id) => {
        setProblems(
            problems.map((problem) => {
                if (problem.id === id) {
                    return {
                        ...problem,
                        completed: !problem.completed,
                    };
                } else {
                    return problem;
                }
            })
        );
    };

    return (
        <div className="problem-list">
        <CodeEditor/>
        </div>
    );
}
export default ProblemList;