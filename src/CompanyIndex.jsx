export function CompanyIndex(props) {
  return (
    <div>
      <h1>Companies</h1>
      {props.companies.map((company) => (
        <div key={company.id}>
          {/* <h1>Jobs</h1> */}
          <p>company id: {company.id}</p>
          <p>Name: {company.name}</p>
          {/* <url>{company.logo}</url> */}
          <img src= {company.logo}  height={300} width={300}/>
          <p>Description: {company.description}</p>
          
          {/* <button onClick={() => props.onShowJob(job)}>More info</button> */}
        </div>
      ))}
    </div>
  );
}