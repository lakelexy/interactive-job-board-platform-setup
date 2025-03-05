import { Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  location: string;
  company: string;
  experience: string;
  category: string;
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company ?? "Unknown Company"}</p>
      <p className="text-sm">{job.location}</p>
      <Link to={`/job/${job.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
