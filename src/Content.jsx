import axios from "axios";
import { useState, useEffect } from "react";
import { JobsIndex } from "./JobsIndex";
import { JobsNew } from "./JobsNew";
import { JobsShow } from "./JobsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { CompanyIndex } from "./CompanyIndex";

export function Content() {
  const [jobs, setJobs] = useState([]);
  const [isJobsShowVisible, setIsJobsShowVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState({});
  const [companies, setCompany] = useState([]);

  const handleIndexJobs = () => {
    console.log("handleIndexJobs");
    axios.get("http://localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  };

  const handleIndexCompanies = () => {
    console.log("handleIndexCompanies");
    axios.get("http://localhost:3000/companies.json").then((response) => {
      console.log(response.data);
      setCompany(response.data);
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

  const handleUpdateJob = (id, params, successCallback) => {
    console.log("handleUpdateJob", params);
    axios.patch(`http://localhost:3000/jobs/${id}.json`, params).then((response) => {
      setJobs(
        jobs.map((job) => {
          if (job.id === response.data.id) {
            return response.data;
          } else {
            return job;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsJobsShowVisible(false);
  };

  const handleDestroyJob = (id) => {
    console.log("handleDestroyJob", id);
    axios.delete(`http://localhost:3000/jobs/${id}.json`).then((response) => {
      setJobs(jobs.filter((job) => job.id !== id));
      handleClose();
    });
  };

  useEffect(handleIndexJobs, []);
  useEffect(handleIndexCompanies, []);

  return (
    <main>
      <JobsNew onCreateJob={handleCreateJob} />
      <Signup /> <br />
      <Login />  <br />
      <LogoutLink />
      <CompanyIndex companies ={companies} />
      <JobsIndex jobs={jobs} onShowJob={handleShowJob}/>
      <Modal show={isJobsShowVisible} onClose={handleClose}>
        <JobsShow job={currentJob} onUpdateJob={handleUpdateJob} onDestroyJob={handleDestroyJob} />
      </Modal>
    </main>
  )
}


