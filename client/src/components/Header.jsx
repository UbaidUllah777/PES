import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/PES_Logo.png"; // Update the path if needed

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="bg-[#f9f9f9] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-15 py-1">
        {/* Logo and Navigation Links */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="Logo" />
        </Link>

        {/* Burger Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)} // Toggle menu on click
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar links */}
        <div
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`} // Conditionally show or hide the navbar
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#f9f9f9] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 font-inter font-normal text-gray-900 hover:bg-[#fb8501] md:hover:bg-transparent md:border-0 md:hover:text-[#fb8501] md:p-0 dark:text-white md:dark:text-[#fb8501] dark:hover:bg-gray-700 dark:hover:text-[#fb8501] md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 font-inter font-normal text-gray-900 hover:bg-[#fb8501] md:hover:bg-transparent md:border-0 md:hover:text-[#fb8501] md:p-0 dark:text-white md:dark:hover:text-[#fb8501] dark:hover:bg-gray-700 dark:hover:text-[#fb8501] md:dark:hover:bg-transparent"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 font-inter font-normal text-gray-900 hover:bg-[#fb8501] md:hover:bg-transparent md:border-0 md:hover:text-[#fb8501] md:p-0 dark:text-white md:dark:hover:text-[#fb8501] dark:hover:bg-gray-700 dark:hover:text-[#fb8501] md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/case-studies"
                className="block py-2 px-3 font-inter font-normal text-gray-900 hover:bg-[#fb8501] md:hover:bg-transparent md:border-0 md:hover:text-[#fb8501] md:p-0 dark:text-white md:dark:hover:text-[#fb8501] dark:hover:bg-gray-700 dark:hover:text-[#fb8501] md:dark:hover:bg-transparent"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="block py-2 px-3 font-inter font-normal text-gray-900 hover:bg-[#fb8501] md:hover:bg-transparent md:border-0 md:hover:text-[#fb8501] md:p-0 dark:text-white md:dark:hover:text-[#fb8501] dark:hover:bg-gray-700 dark:hover:text-[#fb8501] md:dark:hover:bg-transparent"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-3 font-inter font-normal text-gray-900 hover:bg-[#fb8501] md:hover:bg-transparent md:border-0 md:hover:text-[#fb8501] md:p-0 dark:text-white md:dark:hover:text-[#fb8501] dark:hover:bg-gray-700 dark:hover:text-[#fb8501] md:dark:hover:bg-transparent"
              >
                Dashboard
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
