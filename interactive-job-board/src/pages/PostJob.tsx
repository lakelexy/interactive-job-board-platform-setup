import { useState } from "react";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);  // Track loading state
  const [error, setError] = useState(""); // Track error message
  const [success, setSuccess] = useState(""); // Track success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { title, company, location, description };
    setLoading(true); // Set loading state

    try {
      const response = await fetch(
        "https://jobboardbackend-production-0287.up.railway.app/api/jobs/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jobData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post job. Please try again.");
      }

      const data = await response.json();
      setSuccess("Job posted successfully!");  // Show success message
      setTitle("");  // Clear the form fields
      setCompany("");
      setLocation("");
      setDescription("");
    } catch (error) {
      setError(error.message || "Something went wrong!"); // Display error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Post a Job</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Display
