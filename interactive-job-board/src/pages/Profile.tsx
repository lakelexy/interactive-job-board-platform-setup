import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext) || {
    user: null,
    logout: () => {},
  };

  if (!user)
    return <p className="text-center">Please log in to access your profile.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
      <p className="text-gray-600">Email: {user.email}</p>
      <button
        onClick={logout}
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
