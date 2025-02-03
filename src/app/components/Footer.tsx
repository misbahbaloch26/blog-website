// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">Food Blogs by Misbah</p>
        <p className="text-sm">
          © 2025 Blogs by Misbah. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="/About-us"
            className="text-white hover:text-blue-400 mx-3 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 mx-3 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/contact-us"
            className="text-white hover:text-blue-400 mx-3 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
