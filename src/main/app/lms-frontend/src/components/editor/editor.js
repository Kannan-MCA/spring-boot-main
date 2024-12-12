import axios from "axios";
import "./App.css";
import stubs from "./stubs";
import React, { useState, useEffect } from "react";
import moment from "moment";

function App() {
  const [codeText, setCodeText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [jobId, setJobId] = useState(null);
  const [jobStatus, setJobStatus] = useState(null);
  const [jobDetails, setJobDetails] = useState(null);
  const [pollInterval, setPollInterval] = useState(null);

  useEffect(() => {
    setCodeText(stubs[language]);
  }, [language]);

  useEffect(() => {
    const defaultLanguage = localStorage.getItem("default-language") || "cpp";
    setLanguage(defaultLanguage);
  }, []);

  const handleSubmit = async () => {
    const payload = {
      language,
      codeText,
    };

    try {
      setOutputText("");
      setJobId(null);
      setJobDetails(null);
      const { data } = await axios.post("http://localhost:5000/run", payload);

      if (data.jobId) {
        setJobId(data.jobId);
        setJobStatus("Submitted.");

        setPollInterval(
          setInterval(async () => {
            const { data: statusRes } = await axios.get(
              `http://localhost:5000/status`,
              {
                params: {
                  id: data.jobId,
                },
              }
            );

            const { success, job, error } = statusRes;

            if (success) {
              const { status: jobStatus, output: jobOutput } = job;
              setJobStatus(jobStatus);
              setJobDetails(job);
              if (jobStatus === "pending") return;
              setOutputText(jobOutput);
              clearInterval(pollInterval);
            } else {
              setOutputText(error);
              setJobStatus("Bad request");
              clearInterval(pollInterval);
            }
          }, 1000)
        );
      } else {
        setOutputText("Retry again.");
      }
    } catch ({ response }) {
      if (response) {
        const errMsg = response.data.err.stderr;
        setOutputText(errMsg);
      } else {
        setOutputText("Please retry submitting.");
      }
    }
  };

  const setDefaultLanguage = () => {
    localStorage.setItem("default-language", language);
  };

  const renderTimeDetails = () => {
    if (!jobDetails) {
      return "";
    }

    let { submittedAt, startedAt, completedAt } = jobDetails;
    let result = "";

    submittedAt = moment(submittedAt).toString();
    result += `Job Submitted At: ${submittedAt}  `;

    if (!startedAt || !completedAt) return result;

    const start = moment(startedAt);
    const end = moment(completedAt);
    const diff = end.diff(start, "seconds", true);
    result += `Execution Time: ${diff}s`;

    return result;
  };

  return (
    <div className="App">
      <h1>Online Code Compiler</h1>
      <div>
        <label>Language:</label>
        <select
          value={language}
          onChange={(e) => {
            if (window.confirm("Are you sure you want to change language? WARNING: Your current code will be lost.")) {
              setLanguage(e.target.value);
            }
          }}
        >
          <option value="cpp">C++</option>
          <option value="py">Python</option>
        </select>
      </div>
      <br />
      <div>
        <button onClick={setDefaultLanguage}>Set Default</button>
      </div>
      <br />
      <textarea
        rows="20"
        cols="75"
        value={codeText}
        onChange={(e) => setCodeText(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>{jobStatus}</p>
      <p>{jobId ? `Job ID: ${jobId}` : ""}</p>
      <p>{renderTimeDetails()}</p>
      <p>{outputText}</p>
    </div>
  );
}

export default App;