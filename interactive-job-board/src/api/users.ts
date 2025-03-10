import axios from "axios";

const BASE_URL =
  "https://jobboardbackend-production-0287.up.railway.app/api/auth";

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register/`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const loginUser = async (credentials: any) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/profile/`,
      credentials,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchUserProfile = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};
