import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../components/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`w-full py-4 px-8 fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 ease-in-out ${
        darkMode ? "bg-gradient-to-r from-[#2C3E56] to-[#1C2A49] text-white" : "bg-gradient-to-r from-[#f0f4f8] to-[#e0e6ed] text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-wide">{`My Dashboard`}</h1>

        <button
          onClick={toggleDarkMode}
          className="btn btn-primary flex items-center justify-center p-3 rounded-full transition-all duration-300 ease-in-out bg-[#3FA2F6] hover:bg-[#1C2A49] shadow-md transform hover:scale-110"
        >
          {darkMode ? (
            <Sun className="text-xl" />
          ) : (
            <Moon className="text-xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
