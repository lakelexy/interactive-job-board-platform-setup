import React, { useState, useContext } from "react";
import { JobContext } from "../../context/JobContext";
import InputField from "../common/InputField";

const FilterBar: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  // Retrieve job context
  const jobContext = useContext(JobContext);
  if (!jobContext) return null;

  // Apply filters via context
  //  const applyFilters = () => {
  //  jobContext.setFilters({ category, location, experience });
  //};

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-blue-50 p-6 rounded-lg shadow-md my-8">
      {/* Category Input */}
      <div className="flex-1">
        <label
          htmlFor="category"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Category
        </label>
        <InputField
          id="category"
          name="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter job category..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
        />
      </div>

      {/* Location Input */}
      <div className="flex-1">
        <label
          htmlFor="location"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Location
        </label>
        <InputField
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
        />
      </div>

      {/* Experience Dropdown */}
      <div className="flex-1">
        <label
          htmlFor="experience"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Experience Level
        </label>
        <select
          id="experience"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="">Select Experience Level</option>
          <option value="Entry-Level">Entry-Level</option>
          <option value="Mid-Level">Mid-Level</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
