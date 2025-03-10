import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Icon from "../common/Icon";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo & Home Link */}
      <Link
        to="/"
        className="flex items-center space-x-2 text-xl font-bold text-blue-700"
      >
        <Icon name="home" className="w-6 h-6 text-blue-500" />
        <span>ProDev Job Board</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        <Icon name="menu" className="w-6 h-6" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          to="/company-review"
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
        >
          <Icon name="reviews" className="w-5 h-5" />
          <span>Company Reviews</span>
        </Link>

        <Link
          to="/notifications"
          className="relative text-gray-700 hover:text-blue-500"
        >
          <Icon name="notifications" className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </Link>

        <Link to="/messages" className="text-gray-700 hover:text-blue-500">
          <Icon name="messages" className="w-6 h-6" />
        </Link>

        {auth?.user ? (
          <>
            <Link to="/profile" className="text-gray-700 hover:text-blue-500">
              <Icon name="profile" className="w-7 h-7" />
            </Link>
            <button
              onClick={auth.logout}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="flex space-x-2">
            <Link
              to="/register"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>

      {/* Mobile Navigation (Hidden by default) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-4">
          <Link
            to="/company-review"
            className="text-gray-700 hover:text-blue-500"
          >
            Company Reviews
          </Link>
          <Link
            to="/notifications"
            className="text-gray-700 hover:text-blue-500"
          >
            Notifications
          </Link>
          <Link to="/messages" className="text-gray-700 hover:text-blue-500">
            Messages
          </Link>
          {auth?.user ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-blue-500">
                Profile
              </Link>
              <button
                onClick={auth.logout}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
