export function JobsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateJob(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Job</h1>
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
        <button type="submit">Create job</button>
      </form>
    </div>
  );
}
