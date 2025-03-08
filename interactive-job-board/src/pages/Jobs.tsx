import JobList from "../components/job/JobList";

const Jobs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Jobs</h1>
      <JobList />
    </div>
  );
};

export default Jobs;
