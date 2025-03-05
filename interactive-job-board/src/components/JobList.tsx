import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { Link } from "react-router-dom";

const JobList = () => {
  const jobContext = useContext(JobContext);

  if (!jobContext) return <p className="text-gray-500">Loading jobs...</p>;

  const { filteredJobs } = jobContext;

  return (
    <div className="space-y-4">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <Link
            to={`/job/${job.id}`} // ✅ Link to job details
            key={job.id}
            className="block p-4 border rounded-md shadow-md hover:bg-gray-100 transition"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">
              {job.company} - {job.location}
            </p>
            <p className="text-gray-500">{job.experience}</p>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-center">No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;
