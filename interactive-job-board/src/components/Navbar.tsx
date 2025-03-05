import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Job Board</h1>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/job-details" className="hover:text-gray-400 transition">
            Job Details
          </Link>
          <Link to="/apply" className="hover:text-gray-400 transition">
            Apply
          </Link>
          <Link to="/about" className="hover:text-gray-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
