// Use the environment variable if available; otherwise, use the fallback URL.
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://jobboardbackend-production-0287.up.railway.app/api";

/**
 * Generic fetch function to call any endpoint.
 * @param endpoint - The API endpoint (e.g., '/jobs/' or '/auth/login/')
 * @param options - Fetch options (method, headers, body, etc.)
 * @returns The JSON response from the API.
 */
export const fetchData = async (endpoint: string, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Helper function to fetch jobs.
 * @param options - Fetch options (optional)
 */
export const fetchJobs = async (options = {}) => {
  return fetchData("/jobs/", options);
};

/**
 * Helper function to perform authentication related requests.
 * Use this to call endpoints under /auth/
 * @param endpoint - The specific auth endpoint (e.g., 'login', 'register')
 * @param options - Fetch options
 */
export const authFetch = async (endpoint: string, options = {}) => {
  return fetchData(`/auth/${endpoint}`, options);
};
