import { useContext } from "react";
import { JobContext } from "../../context/JobContext";

const JobList = () => {
  const { jobs } = useContext(JobContext) || { jobs: [] };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <div key={job.id} className="border p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-gray-500">{job.location}</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
