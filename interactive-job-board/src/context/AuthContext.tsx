// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { fetchData } from "../api/api";

interface AuthContextType {
  user: any;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: { email: string; password: string }) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("auth_token")
  );

  /**
   * Fetch the authenticated user profile after login.
   */
  const fetchUserProfile = async () => {
    try {
      const userData = await authFetch("profile", {}, true); // Ensure `profile` API exists
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  /**
   * Login function - Authenticates user and stores token.
   */
  const login = async (email: string, password: string) => {
    try {
      const response = await authFetch("login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (response.token) {
        setToken(response.token);
        localStorage.setItem("auth_token", response.token);
        fetchUserProfile(); // Fetch user data after login
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  /**
   * Logout function - Clears token and resets user state.
   */
  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
    setToken(null);
  };

  /**
   * Register function - Registers user.
   */
  const register = async (data: { email: string; password: string }) => {
    try {
      const response = await authFetch("register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  /**
   * Auto-logout if token expires.
   */
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        const expiryTime = decodedToken.exp * 1000; // Convert to milliseconds

        if (expiryTime < Date.now()) {
          console.warn("Token expired, logging out...");
          logout();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        logout();
      }
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
