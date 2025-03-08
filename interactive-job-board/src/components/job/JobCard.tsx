import { Job } from "../../api/jobs"; // Assuming you have a Job type definition

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white mb-4">
      <h2 className="text-lg font-semibold">{job.title}</h2>
      <p className="text-gray-600">
        {job.company} - {job.location}
      </p>
      <p className="text-gray-500">Experience: {job.experience}</p>
      <p className="text-gray-500">Type: {job.jobType}</p>
      <p className="text-gray-500">Posted: {job.datePosted}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
