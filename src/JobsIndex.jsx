export function JobsIndex(props) {
  return (
    <div>
      <h1>All jobs</h1>
      {props.jobs.map((job) => (
        <div key={job.id}>
          <h1>Jobs</h1>
          <p>Company: {job.company_id}</p>
          <p>Title: {job.title}</p>
          <p>Description: {job.description}</p>
          <p>URL: {job.url}</p>
          <p>Location: {job.location}</p>
          <p>Active: {job.active}</p>
          <p>Salary Range: {job.salary_range}</p>
          <button onClick={() => props.onShowJob(job)}>More info</button>
        </div>
      ))}
    </div>
  );
}
