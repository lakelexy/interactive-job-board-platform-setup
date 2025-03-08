import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { JobContext } from "../../context/JobContext"; // Ensure correct import path
import { Job } from "../../api/jobs"; // Ensure Job type exists

const JobDetail = () => {
  const { id } = useParams();
  const jobContext = useContext(JobContext); // Ensure JobContext is accessed properly
  const [job, setJob] = useState<Job | null>(null); // Explicitly define Job type

  useEffect(() => {
    if (jobContext?.jobs) {
      const foundJob = jobContext.jobs.find((j: Job) => j.id === id);
      setJob(foundJob || null);
    }
  }, [id, jobContext]);

  if (!job) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-lg text-gray-600">
        {job.company} - {job.location}
      </p>
      <p className="mt-4">{job.description}</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetail;
