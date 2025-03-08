// src/api/auth.ts
import axios from "axios";

const API_BASE_URL =
  "https://jobboardbackend-production-0287.up.railway.app/api/auth/";

/**
 * Generate a token for registration.
 * (Assuming your backend requires a public or temporary token before registration.)
 */
export const generateRegistrationToken = async (): Promise<string> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/token/`, {
      // Provide public credentials or a pre-shared key if required by your backend
      email: "public@example.com",
      password: "publicpassword",
    });
    return response.data.token; // { token: "..." }
  } catch (error) {
    console.error("Error generating registration token:", error);
    throw error;
  }
};

/**
 * Register a new user using JWT for authorization.
 */
export const register = async (
  registrationData: {
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    role?: string;
  },
  token: string
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register/`,
      registrationData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

/**
 * Login with email and password.
 */
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/token/`, {
      email,
      password,
    });
    // Expected response: { token: "JWT_TOKEN", user: { ... }, refresh: "REFRESH_TOKEN" }
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

/**
 * Refresh an expired JWT token.
 */
export const refreshToken = async (refresh: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/token/refresh/`, {
      refresh,
    });
    return response.data;
  } catch (error) {
    console.error("Refresh token error:", error);
    throw error;
  }
};

/**
 * Logout the current user.
 */
export const logout = async (token: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/logout/`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

/**
 * Verify the user's email.
 */
export const verifyEmail = async (verificationData: { token: string }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/verify_email/`,
      verificationData
    );
    return response.data;
  } catch (error) {
    console.error("Email verification error:", error);
    throw error;
  }
};

/**
 * Get the authenticated user's profile.
 */
export const getProfile = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Profile fetch error:", error);
    throw error;
  }
};
