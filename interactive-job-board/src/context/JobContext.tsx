import { createContext, useState, ReactNode } from "react";

// Define Job type
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
}

// Define JobContext type
interface JobContextType {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
}

// Create JobContext
export const JobContext = createContext<JobContextType | null>(null);

// Provider Component
export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};
