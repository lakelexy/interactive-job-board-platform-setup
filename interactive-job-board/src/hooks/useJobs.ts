import { useState, useEffect } from "react";
import axios from "axios";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string; // e.g., "Full-time", "Part-time"
  description: string;
  createdAt: string;
}

const API_URL =
  "https://jobboardbackend-production-0287.up.railway.app/api/jobs/"; // Replace with your actual API URL

const useJobs = (searchQuery = "", filters = {}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(API_URL, {
          params: { search: searchQuery, ...filters },
        });
        setJobs(response.data);
      } catch (err) {
        setError("Failed to fetch jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchQuery, filters]);

  return { jobs, loading, error };
};

export default useJobs;
