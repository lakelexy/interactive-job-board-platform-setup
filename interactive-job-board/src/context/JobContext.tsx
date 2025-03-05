import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  experience: string;
}

interface Filters {
  category?: string;
  location?: string;
  experience?: string;
}

interface JobContextType {
  jobs: Job[];
  filteredJobs: Job[];
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void; // Allow partial updates
}

export const JobContext = createContext<JobContextType | null>(null);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [filters, setFiltersState] = useState<Filters>({});

  // Fetch job data
  useEffect(() => {
    axios
      .get("https://api.example.com/jobs")
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Apply filters when jobs or filters change
  useEffect(() => {
    let filtered = jobs;

    if (filters.category) {
      filtered = filtered.filter((job) =>
        job.category.toLowerCase().includes(filters.category!.toLowerCase())
      );
    }
    if (filters.location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }
    if (filters.experience) {
      filtered = filtered.filter(
        (job) =>
          job.experience.toLowerCase() === filters.experience!.toLowerCase()
      );
    }

    setFilteredJobs(filtered);
  }, [filters, jobs]);

  // Update filters without overwriting all state
  const setFilters = (newFilters: Partial<Filters>) => {
    setFiltersState((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <JobContext.Provider value={{ jobs, filteredJobs, filters, setFilters }}>
      {children}
    </JobContext.Provider>
  );
};
