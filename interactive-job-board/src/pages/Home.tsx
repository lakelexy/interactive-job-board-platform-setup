import { HomeIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import JobCard from "../components/job/JobCard";
import FilterBar from "../components/job/FilterBar";
import useJobs from "../hooks/useJobs";

const Home = () => {
  const { jobs, loading, error } = useJobs();

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold flex items-center space-x-2 text-blue-700">
          <HomeIcon className="w-8 h-8 text-blue-500" />
          <span>Welcome to ProDev Job Board</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Find the best jobs and connect with top employers.
        </p>
      </section>

      {/* Filter Bar Section */}
      <FilterBar />

      {/* Job Listings Section */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-4">
          <BriefcaseIcon className="w-6 h-6 text-gray-700" />
          <span>Job Listings</span>
        </h2>
        {loading && <p className="text-gray-500">Fetching job listings...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && jobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          !loading &&
          !error && (
            <p className="text-gray-500 mt-4">
              No jobs available at the moment.
            </p>
          )
        )}
      </section>
    </div>
  );
};

export default Home;
