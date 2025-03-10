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

// API Base URL (Corrected)
const API_URL =
  "https://jobboardbackend-production-0287.up.railway.app/api/jobs";

// Fetch all jobs with optional filters
export const fetchJobs = async (
  filters: Record<string, string | number | boolean> = {},
  token?: string
): Promise<Job[]> => {
  try {
    const response = await axios.get<Job[]>(API_URL, {
      params: filters,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}), // Include token if provided
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching jobs:",
      axios.isAxiosError(error) ? error.response?.data || error.message : error
    );
    throw error;
  }
};

// Fetch a single job by ID (Fixed URL)
export const fetchJobById = async (
  id: string,
  token?: string
): Promise<Job> => {
  try {
    const response = await axios.get<Job>(`${API_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}), // Include token if provided
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching job details:",
      axios.isAxiosError(error) ? error.response?.data || error.message : error
    );
    throw error;
  }
};

// Post a new job (Requires authentication)
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
    console.error(
      "Error posting job:",
      axios.isAxiosError(error) ? error.response?.data || error.message : error
    );
    throw error;
  }
};
