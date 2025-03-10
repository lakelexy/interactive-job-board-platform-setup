import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import JobDetail from "../pages/JobDetail";
import Login from "../pages/Login";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PostJob from "../pages/PostJob";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post-job" element={<PostJob />} />
    </Routes>
  );
};

export default AppRoutes;
