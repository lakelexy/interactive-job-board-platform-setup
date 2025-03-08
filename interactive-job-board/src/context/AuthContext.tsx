// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode } from "react";
import * as authAPI from "../api/auth";

interface AuthContextType {
  user: any;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
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

  const login = async (email: string, password: string) => {
    const data = await authAPI.login(email, password);
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("auth_token", data.token);
  };

  const logout = async () => {
    if (token) {
      await authAPI.logout(token);
      setUser(null);
      setToken(null);
      localStorage.removeItem("auth_token");
    }
  };

  const register = async (data: { email: string; password: string }) => {
    // Generate a registration token first
    const regToken = await authAPI.generateRegistrationToken();
    // Use the token to register
    const response = await authAPI.register(data, regToken);
    // Optionally, you might want to navigate to login after registration
    // Here we simply log the response
    console.log("Registration successful:", response);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
