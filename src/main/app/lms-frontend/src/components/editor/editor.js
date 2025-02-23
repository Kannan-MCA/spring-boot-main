import axios from "axios";
import "./editor.css";
import stubs from "./stubs";
import React, { useState, useEffect } from "react";
import moment from "moment";

function CodeEditor() {
  const [codeText, setCodeText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [jobId, setJobId] = useState(null);
  const [jobStatus, setJobStatus] = useState(null);
  const [jobDetails, setJobDetails] = useState(null);
  const [pollInterval, setPollInterval] = useState(null);
  const [questionNo, setQustNo] = useState(0);

  const [qustionText, setQustionText] = useState([
    { id: "1", discription: "Revers a sorted array", tesctcase: [{}] },
    { id: "2", discription: "array", tesctcase: [{}] },
    { id: "3", discription: "Revers a sorted", tesctcase: [{}] }
  ]);





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
      const { data } = await axios.post("http://localhost:8090/run", payload);

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

  const handleNext = () => {
    if (questionNo >= 0 && questionNo < qustionText.length - 1) {
      setQustNo(questionNo + 1);
    }
  };
  const handlePrvious = async () => {
    if (questionNo > 0) {
      setQustNo(questionNo - 1);
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
      <h1>Code Compiler</h1>
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
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="py">Python</option>
          <option value="js">JavaScript</option>

        </select>
      </div>
      <br />
      {/* <div>
        <button onClick={setDefaultLanguage}>Set Default</button>
      </div> */}
      <br />
      <div className="qustion-editor ">
        <p className="qustion">{qustionText[questionNo].discription}</p>
        <textarea
          rows="10"
          cols="80"
          value={codeText}
          onChange={(e) => setCodeText(e.target.value)}
        ></textarea>


      </div>




      <div className="button-container">

        <div className="col-md-6">
          <button onClick={handlePrvious} className="nav-btn">{"<<"}</button>
          <button onClick={handleNext} className="nav-btn">{">>"}</button>
        </div>
        <div className="col-md-6">
          <button onClick={handleSubmit} className="submit-btn">Submit</button>
        </div>




      </div>





      <p>{jobStatus}</p>
      <p>{jobId ? `Job ID: ${jobId}` : ""}</p>
      <p>{renderTimeDetails()}</p>
      <p>{outputText}</p>


    </div>


  );
}

export default CodeEditor;