export function JobsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateJob(props.job.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyJob(props.job.id);
  };

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

      <form onSubmit={handleSubmit}>
        <div>
          Company_id: <input name="company_id" type="text" />
        </div>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          URL: <input name="url" type="text" />
        </div>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <div>
          Active: <input name="active" type="text" />
        </div>
        <div>
          Salary Range: <input name="salary_range" type="text" />
        </div>
        <button type="submit">Update job</button>
      </form>
      <button onClick={handleClick}>Destroy job</button>
    </div>
  );
}

