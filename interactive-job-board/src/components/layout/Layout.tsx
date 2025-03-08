import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "../common/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen] = useState(true); // Sidebar state

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="flex flex-1">
        {/* Sidebar - Visible on medium/large screens, collapsible on mobile */}
        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-64 bg-gray-100 h-screen fixed md:relative`}
        >
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 ml-64 md:ml-0">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
