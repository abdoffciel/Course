import { FaBook, FaPlayCircle, FaFileAlt, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDarkMode } from "../components/DarkModeContext";

const SideBar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Sidebar styles
  const sidebarStyles = darkMode
    ? "bg-gradient-to-b from-[#1C2A49] to-[#3A5B88] text-gray-100"
    : "bg-gradient-to-b from-[#f0f4f8] to-[#e0e6ed] text-gray-800";

  const linkStyles = darkMode
    ? "text-gray-200 hover:text-white transition-all duration-300 ease-in-out p-3 rounded-lg hover:bg-[#2C3E56] flex items-center"
    : "text-gray-800 hover:text-gray-700 transition-all duration-300 ease-in-out p-3 rounded-lg hover:bg-[#f2f5f9] flex items-center";

  return (
    <div className={`w-100 h-screen flex flex-col p-8 space-y-10 sticky top-0 mx-4 my-4 mb-50 rounded-r-3xl shadow-xl ${sidebarStyles}`}>
     <nav className="space-y-6 mt-10">
        <Link to="/WeeklySchedule" className={linkStyles}>
          <FaBook className="mr-4 text-2xl" /> Weekly Schedule
        </Link>
        <Link to="/quizzes" className={linkStyles}>
          <FaBook className="mr-4 text-2xl" /> Quizzes
        </Link>
        <Link to="/courses" className={linkStyles}>
          <FaPlayCircle className="mr-4 text-2xl" /> Courses
        </Link>
        <Link to="/documents" className={linkStyles}>
          <FaFileAlt className="mr-4 text-2xl" /> Documents
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
