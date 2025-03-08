import axios from "axios";

// Define Job type
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  salary?: string;
  requirements?: string[];
  benefits?: string[];
  postedAt?: string;
  experience?: string;
  jobType?: string;
  datePosted?: string;
}

// API Base URL (Ensure it's correct)
const API_URL =
  "https://jobboardbackend-production-0287.up.railway.app/api/jobs/{id}/";

// Fetch all jobs with optional filters
export const fetchJobs = async (
  filters: Record<string, string | number | boolean> = {}
): Promise<Job[]> => {
  try {
    const response = await axios.get<Job[]>(API_URL, {
      params: filters,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios Error fetching jobs:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected Error fetching jobs:", error);
    }
    throw error;
  }
};

// Fetch a single job by ID
export const fetchJobById = async (id: string): Promise<Job> => {
  try {
    const response = await axios.get<Job>(`${API_URL}/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios Error fetching job details:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected Error fetching job details:", error);
    }
    throw error;
  }
};

// Post a new job (requires authentication token)
export const postJob = async (jobData: Job, token: string): Promise<Job> => {
  try {
    const response = await axios.post<Job>(API_URL, jobData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios Error posting job:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected Error posting job:", error);
    }
    throw error;
  }
};
