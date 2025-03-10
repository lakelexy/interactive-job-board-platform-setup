// src/api/auth.ts
import axios from "axios";

const API_BASE_URL =
  "https://jobboardbackend-production-0287.up.railway.app/api/auth";

/**
 * Interfaces for API responses (optional but useful for TypeScript)
 */
interface AuthResponse {
  access: string;
  refresh: string;
  user: {
    id: number;
    email: string;
    first_name?: string;
    last_name?: string;
    role?: string;
  };
}

interface ErrorResponse {
  message: string;
}

/**
 * Register a new user.
 */
export const register = async (registrationData: {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  role?: string;
}): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_BASE_URL}/auth/register/`,
      registrationData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: "Registration failed" };
    }
    throw { message: "Unexpected error occurred" };
  }
};

/**
 * Login with email and password.
 */
export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_BASE_URL}/auth/token/`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: "Login failed" };
    }
    throw { message: "Unexpected error occurred" };
  }
};

/**
 * Refresh an expired JWT token.
 */
export const refreshToken = async (refresh: string): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_BASE_URL}/auth/token/refresh/`,
      { refresh }
    );
    return response.data;
  } catch (error) {
    console.error("Refresh token error:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: "Token refresh failed" };
    }
    throw { message: "Unexpected error occurred" };
  }
};

/**
 * Logout the current user.
 */
export const logout = async (token: string): Promise<void> => {
  try {
    await axios.post(
      `${API_BASE_URL}/auth/logout/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error("Logout error:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: "Logout failed" };
    }
    throw { message: "Unexpected error occurred" };
  }
};

/**
 * Verify the user's email.
 */
export const verifyEmail = async (verificationData: {
  token: string;
}): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/auth/verify_email/`, verificationData);
  } catch (error) {
    console.error("Email verification error:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: "Email verification failed" };
    }
    throw { message: "Unexpected error occurred" };
  }
};

/**
 * Get the authenticated user's profile.
 */
export const getProfile = async (
  token: string
): Promise<AuthResponse["user"]> => {
  try {
    const response = await axios.get<AuthResponse["user"]>(
      `${API_BASE_URL}/auth/profile/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Profile fetch error:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: "Profile fetch failed" };
    }
    throw { message: "Unexpected error occurred" };
  }
};
