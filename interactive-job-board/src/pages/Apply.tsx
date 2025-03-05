import { useState } from "react";
import Button from "../components/Button";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
    coverLetter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Apply for this Job
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="border p-2 w-full rounded-md"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 w-full rounded-md"
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="border p-2 w-full rounded-md h-24"
            name="coverLetter"
            placeholder="Cover Letter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          ></textarea>
          <input
            className="border p-2 w-full rounded-md"
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            required
          />
          {formData.resume && (
            <p className="text-sm text-gray-600">
              Selected file: {formData.resume.name}
            </p>
          )}

          {/* Fix: Button now correctly submits the form */}
          <Button text="Apply Now" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Apply;
