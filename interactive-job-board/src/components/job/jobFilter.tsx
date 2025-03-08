import { useState } from "react";

interface FilterProps {
  onFilter: (filters: {
    title: string;
    location: string;
    jobType: string;
  }) => void;
}

const JobFilters: React.FC<FilterProps> = ({ onFilter }) => {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter({ title, location, jobType });
  };

  return (
    <form
      onSubmit={handleFilter}
      className="p-4 bg-gray-100 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Job title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="">Select Job Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Remote">Remote</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded"
      >
        Apply Filters
      </button>
    </form>
  );
};

export default JobFilters;
