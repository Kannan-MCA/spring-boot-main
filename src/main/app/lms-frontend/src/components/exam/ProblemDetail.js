import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProblemById } from '../services/problemService';
import { submitCode } from '../services/submissionService';
import CodeEditor from './CodeEditor';

const ProblemDetail = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    fetchProblemById(id)
      .then(data => setProblem(data))
      .catch(error => console.error("Error fetching problem:", error));
  }, [id]);

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  const handleSubmit = () => {
    submitCode(id, code)
      .then(response => {
        console.log("Submission result:", response);
        // Handle the response (e.g., display feedback)
      })
      .catch(error => console.error("Error submitting code:", error));
  };

  if (!problem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>
      <CodeEditor language="javascript" code={code} onChange={handleCodeChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ProblemDetail;
