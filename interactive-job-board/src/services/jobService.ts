export const fetchJobs = async () => {
  const response = await fetch("/api/jobs");
  return response.json();
};

export {}; // Fix for --isolatedModules
