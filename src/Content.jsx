import axios from "axios";
import { useState, useEffect } from "react";
import { JobsIndex } from "./JobsIndex";
import { JobsNew } from "./JobsNew";
import { JobsShow } from "./JobsShow";
import { Modal } from "./Modal";

export function Content() {
  const [jobs, setJobs] = useState([]);
  const [isJobsShowVisible, setIsJobsShowVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState({});

  const handleIndexJobs = () => {
    console.log("handleIndexJobs");
    axios.get("http://localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  };

  const handleCreateJob = (params, successCallback) => {
    console.log("handleCreateJob", params);
    axios.post("http://localhost:3000/jobs.json", params).then((response) => {
      setJobs([...jobs, response.data]);
      successCallback();
    });
  };

  const handleShowJob = (job) => {
    console.log("handleShowJob", job);
    setIsJobsShowVisible(true);
    setCurrentJob(job);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsJobsShowVisible(false);
  };

  useEffect(handleIndexJobs, []);

  return (
    <main>
      <JobsNew onCreateJob={handleCreateJob} />
      <JobsIndex jobs={jobs} onShowJob={handleShowJob}/>
      <Modal show={isJobsShowVisible} onClose={handleClose}>
        <JobsShow job={currentJob} />
      </Modal>
    </main>
  )
}


