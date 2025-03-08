import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext) || {}; // Ensure AuthContext is provided
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    try {
      // Make an API call to your login endpoint
      const response = await axios.post("/api/auth/login", { email, password });

      // Assuming the API returns an object with "user" and "token"
      if (response.data && response.data.user && response.data.token) {
        // Update auth context with the user information
        setUser(response.data.user);
        // Optionally store the token in localStorage for persistence
        localStorage.setItem("auth_token", response.data.token);
        // Navigate to the profile page upon successful login
        navigate("/profile");
      } else {
        setError("Invalid login credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
