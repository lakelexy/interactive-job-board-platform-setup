import { useState } from "react";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://jobboardbackend-production-0287.up.railway.app/api/jobs/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Endpoint not found (404).");
        } else if (response.status === 500) {
          throw new Error("Internal server error (500).");
        } else {
          throw new Error(`Unexpected error: ${response.status}`);
        }
      }

      setSuccess("Job posted successfully!");
      setFormData({
        title: "",
        company: "",
        location: "",
        description: "",
      });
    } catch (error) {
      if (error.name === "TypeError") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(error.message || "Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Post a Job</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 w-full"
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 w-full"
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          className="border p-2 w-full"
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded"
          type="submit"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};

export default PostJob;
