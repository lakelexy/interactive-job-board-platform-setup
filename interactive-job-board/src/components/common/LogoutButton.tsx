import { useNavigate } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 text-red-500 hover:text-red-700 w-full mt-4"
    >
      <ArrowRightOnRectangleIcon className="w-6 h-6" />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
