export function JobsShow(props) {
  return (
    <div>
      <h1>Job information</h1>
      <p>Name: {props.job.company_id}</p>
      <p>Url: {props.job.title}</p>
      <p>Width: {props.job.description}</p>
      <p>Height: {props.job.url}</p>
      <p>Name: {props.job.location}</p>
      <p>Url: {props.job.active}</p>
      <p>Width: {props.job.salary_range}</p>
    </div>
  );
}

