import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ExamPage = ({ match }) => {
  const history = useHistory();
  const { examId, token, authKey } = match.params;

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Required to show a warning dialog
    };

    const handleUnload = () => {
      // Notify back-end that the link should be invalidated
      fetch(`http://localhost:8080/api/invalidate-link/${examId}/${token}?authKey=${authKey}`, {
        method: 'POST'
      });
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, [examId, token, authKey]);

  return (
    <div>

<div className="page-header">
        <h1>Exame</h1>
      </div>
      {/* Exam content */}
    </div>
  );
};

export default ExamPage;