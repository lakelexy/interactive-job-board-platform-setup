// Job Types
export const JOB_TYPES = [
  "Full-Time",
  "Part-Time",
  "Contract",
  "Internship",
  "Freelance",
];

// Nigerian States as Job Locations
export const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

// Other Global Locations
export const JOB_LOCATIONS = [
  "Remote",
  ...NIGERIAN_STATES,
  "Accra, Ghana",
  "Nairobi, Kenya",
  "Cape Town, South Africa",
  "Johannesburg, South Africa",
  "Cairo, Egypt",
  "Casablanca, Morocco",
  "Dakar, Senegal",
  "Addis Ababa, Ethiopia",
  "Kampala, Uganda",
  "Dar es Salaam, Tanzania",
  "Tunis, Tunisia",
  "New York, NY",
  "San Francisco, CA",
  "Los Angeles, CA",
  "Chicago, IL",
  "Austin, TX",
];

// Default Salary Range (Naira - NGN)
export const SALARY_RANGE = {
  min: 500000, // ₦500,000
  max: 15000000, // ₦15,000,000
};

// API Endpoints
export const API_ENDPOINTS = {
  JOBS: "/api/jobs",
  USERS: "/api/users",
  AUTH: "/api/auth",
};

// Date Format
export const DATE_FORMAT = "MMM dd, yyyy";

// Company Sectors (Including Nigerian & African Industries)
export const COMPANY_SECTORS = [
  "Tech",
  "Finance",
  "Healthcare",
  "Education",
  "Marketing",
  "Retail",
  "Manufacturing",
  "Agriculture",
  "Oil & Gas",
  "Logistics & Transport",
  "Telecommunications",
  "Banking",
  "Construction",
  "Government",
  "Legal",
  "Entertainment",
  "Fashion",
  "Real Estate",
];

// Pagination Defaults
export const PAGINATION = {
  PAGE_SIZE: 10,
  CURRENT_PAGE: 1,
};

// Authentication Keys
export const AUTH_KEYS = {
  TOKEN: "auth_token",
  USER_INFO: "user_info",
};
