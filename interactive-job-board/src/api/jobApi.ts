export const fetchJobById = async (id: string) => {
  try {
    const response = await fetch(`https://api.example.com/jobs/${id}`);
    if (!response.ok) throw new Error("Job not found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};
