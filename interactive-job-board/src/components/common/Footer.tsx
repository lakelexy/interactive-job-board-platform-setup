import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} ProDev Job Board. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
