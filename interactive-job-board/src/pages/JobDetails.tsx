import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SkeletonLoader from "../components/SkeletonLoader";
import Button from "../components/Button";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary?: string;
}

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobById = async (jobId: string) => {
      try {
        setLoading(true);
        const response = await fetch(`https://your-api.com/jobs/${jobId}`);
        if (!response.ok) throw new Error("Job not found");

        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load job details"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJobById(id);
    } else {
      setError("Invalid Job ID");
      setLoading(false);
    }
  }, [id]);

  if (loading) return <SkeletonLoader />;
  if (error)
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">{error}</p>
        <Button text="Back to Jobs" onClick={() => navigate("/")} />
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">{job?.title}</h1>
      <p className="text-gray-600">
        {job?.company} - {job?.location}
      </p>
      {job?.salary && (
        <p className="text-green-600 font-semibold mt-2">
          Salary: {job.salary}
        </p>
      )}
      <p className="mt-4 text-gray-700">{job?.description}</p>

      <div className="mt-6 flex gap-4">
        <Button
          text="Apply Now"
          onClick={() => navigate(`/apply?jobId=${job?.id}`)}
        />
        <Button text="Back to Jobs" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default JobDetails;
