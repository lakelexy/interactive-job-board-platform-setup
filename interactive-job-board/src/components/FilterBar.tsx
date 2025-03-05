import { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";
import InputField from "./InputField";

const FilterBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const jobContext = useContext(JobContext);

  if (!jobContext) return null;

  const applyFilters = () => {
    jobContext.setFilters({ category, location, experience });
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-md shadow-md">
      {/* Search Input */}
      <InputField
        name="search"
        label="Search Jobs"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter job title..."
      />

      {/* Job Category Input */}
      <div className="flex items-center border p-2 rounded-md w-full">
        <input
          className="w-full outline-none"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      {/* Location Input */}
      <div className="flex items-center border p-2 rounded-md w-full">
        <input
          className="w-full outline-none"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Experience Level Dropdown */}
      <select
        className="border p-2 w-full rounded-md shadow-sm"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="">Experience Level</option>
        <option value="Entry-Level">Entry-Level</option>
        <option value="Mid-Level">Mid-Level</option>
        <option value="Senior">Senior</option>
      </select>

      {/* Find Jobs Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={applyFilters}
      >
        Find Jobs
      </button>
    </div>
  );
};

export default FilterBar;
