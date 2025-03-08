import {
  BriefcaseIcon,
  InboxIcon,
  DocumentTextIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 shadow-md">
      <nav className="space-y-4">
        {/* Jobs Page */}
        <NavLink
          to="/jobs"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <BriefcaseIcon className="w-6 h-6" />
          <span>Jobs</span>
        </NavLink>

        {/* Job Details (Visible when navigating from Jobs) */}
        <NavLink
          to="/job-details"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <DocumentTextIcon className="w-6 h-6" />
          <span>Job Details</span>
        </NavLink>

        {/* Post a Job (For Employers) */}
        <NavLink
          to="/post-jobs"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <PlusCircleIcon className="w-6 h-6" />
          <span>Post a Job</span>
        </NavLink>

        {/* Messages */}
        <NavLink
          to="/messages"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <InboxIcon className="w-6 h-6" />
          <span>Messages</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
