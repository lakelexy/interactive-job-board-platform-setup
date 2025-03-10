const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://jobboardbackend-production-0287.up.railway.app/api/";

/**
 * Generic fetch function to call any endpoint with optional authentication.
 * @param endpoint - API endpoint (e.g., 'jobs/' or 'auth/login/')
 * @param options - Fetch options (method, headers, body, etc.)
 * @param useAuth - Whether to include the JWT token (default: false)
 * @returns The JSON response from the API.
 */
export const fetchData = async (
  endpoint: string,
  options: RequestInit = {},
  useAuth = false
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Include Authorization token if useAuth is true
  if (useAuth) {
    const token = localStorage.getItem("auth_token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! Status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Fetch jobs from the backend.
 */
export const fetchJobs = async () => {
  return fetchData("/jobs/", {}, true);
};

/**
 * Authentication API functions
 */
export const authAPI = {
  login: async (email: string, password: string) => {
    return fetchData("/auth/login/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (data: { email: string; password: string }) => {
    return fetchData("/auth/register/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  logout: async () => {
    try {
      await fetchData("/auth/logout/", { method: "POST" }, true);
    } catch (error) {
      console.warn("Logout request failed:", error);
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user"); // Ensure user data is also cleared
    }
  },
};
