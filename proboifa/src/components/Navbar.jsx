import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Example wallet balance (just a number with ₹)
  const [walletBalance, setWalletBalance] = useState("₹15");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-md transition-all duration-300">
      {/* Brand */}
      <h1 className="text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
        Probo
      </h1>

      {/* Links */}
      <div className="flex items-center space-x-6 font-medium">
        {["Home", "Events", "Login"].map((item) => (
    <Link
      key={item}
      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
      className="relative text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors duration-200 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      {item}
    </Link>
        ))}

        {/* Wallet Balance Display */}


<div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full px-3 py-2 text-sm font-semibold select-none flex items-center gap-2">
  <FaWallet />
  <span>{walletBalance}</span>
</div>



        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2  bg-yellow-400 dark:bg-yellow-500 
             text-gray-900 dark:text-gray-800  px-3 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-sm"
        >
          {darkMode ? (
            <>
              <MdLightMode /> Light
            </>
          ) : (
            <>
              <MdDarkMode /> Dark
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
