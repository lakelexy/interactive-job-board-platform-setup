import axios from "axios";

const USER_API_URL =
  "https://jobboardbackend-production-0287.up.railway.app/api/auth/register/";

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${USER_API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (credentials: any) => {
  try {
    const response = await axios.post(`${USER_API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const fetchUserProfile = async (token: string) => {
  try {
    const response = await axios.get(`${USER_API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
