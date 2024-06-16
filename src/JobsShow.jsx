export function JobsShow(props) {
  return (
    <div>
      <h1>Job information</h1>
      <p>Company_id: {props.job.company_id}</p>
      <p>Title: {props.job.title}</p>
      <p>Description: {props.job.description}</p>
      <p>URL: {props.job.url}</p>
      <p>Location: {props.job.location}</p>
      <p>Active: {props.job.active}</p>
      <p>Salary Range: {props.job.salary_range}</p>
    </div>
  );
}

