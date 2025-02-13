import React, { useEffect, useState } from 'react';
import { fetchProblems } from '../services/problemService';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetchProblems().then(data => setProblems(data));
  }, []);

  return (
    <div>
      <h1>Problem List</h1>
      <ul>
        {problems.map(problem => (
          <li key={problem.id}>{problem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
