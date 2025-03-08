import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BriefcaseIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";

// Base API URL
const BASE_URL =
  "https://jobboardbackend-production-0287.up.railway.app/api/jobs/{id}/";

const JobDetail = () => {
  const { id } = useParams(); // Get job ID from the URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/job/${id}/`);
        setJob(response.data);
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to fetch job details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  if (loading)
    return (
      <div className="text-gray-500 text-center mt-6">
        <p>Loading job details...</p>
        <div className="animate-pulse bg-gray-200 h-6 w-48 mx-auto mt-2 rounded"></div>
      </div>
    );

  if (error) return <p className="text-red-500 text-center mt-6">{error}</p>;
  if (!job)
    return <p className="text-gray-500 text-center mt-6">Job not found.</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Job Header */}
      <section className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold text-blue-700">{job.title}</h1>
        <p className="text-gray-600 mt-2">{job.company}</p>
      </section>

      {/* Job Details */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <div className="flex items-center space-x-2">
            <BriefcaseIcon className="w-6 h-6 text-gray-500" />
            <span className="text-gray-700 font-medium">{job.type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPinIcon className="w-6 h-6 text-gray-500" />
            <span className="text-gray-700">{job.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CurrencyDollarIcon className="w-6 h-6 text-gray-500" />
            <span className="text-gray-700 font-semibold">${job.salary}</span>
          </div>
        </div>

        <p className="text-gray-600">{job.description}</p>

        {/* Apply Button */}
        {job.applyUrl && (
          <div className="mt-6">
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobDetail;
