// Format Salary Range (e.g., ₦500,000 - ₦1,500,000)
export const formatSalary = (min: number, max: number) => {
  return `₦${min.toLocaleString()} - ₦${max.toLocaleString()}`;
};

// Format Date (e.g., Jan 25, 2025)
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Capitalize First Letter of Each Word (e.g., "software engineer" → "Software Engineer")
export const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Truncate Text for Job Listings (Limit Job Descriptions)
export const truncateText = (text: string, limit: number) => {
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

// Get Job Type Badge Color (Tailwind CSS Classes)
export const getJobTypeColor = (jobType: string) => {
  const colors: Record<string, string> = {
    "Full-Time": "bg-green-100 text-green-700",
    "Part-Time": "bg-yellow-100 text-yellow-700",
    Contract: "bg-blue-100 text-blue-700",
    Internship: "bg-purple-100 text-purple-700",
    Freelance: "bg-gray-100 text-gray-700",
  };
  return colors[jobType] || "bg-gray-100 text-gray-700";
};

// Validate Email Format
export const isValidEmail = (email: string) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

// Validate Password Strength (Min 8 characters, 1 uppercase, 1 number)
export const isStrongPassword = (password: string) => {
  return /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
};

// Generate Unique Job ID (UUID-like)
export const generateJobId = () => {
  return `job-${Math.random().toString(36).substr(2, 9)}`;
};

// Convert String to Slug for Job URLs (e.g., "Software Engineer" → "software-engineer")
export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};

// Store Data in Local Storage
export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Get Data from Local Storage
export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

// Remove Data from Local Storage
export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

// Smooth Scroll to Top
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
