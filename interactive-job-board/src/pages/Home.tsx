import { useContext } from "react";
import JobList from "../components/JobList";
import FilterBar from "../components/FilterBar";
import { JobContext } from "../context/JobContext";

const Home = () => {
  const jobContext = useContext(JobContext);

  if (!jobContext) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Job Listings</h1>
      <FilterBar />
      <JobList />
    </div>
  );
};

export default Home;
