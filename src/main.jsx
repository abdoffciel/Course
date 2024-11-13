import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import DocumentRequest from "./components/Document";
import CoursesList from "./components/CoursesList";
import QuizList from "./components/Quiz";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import { DarkModeProvider } from "./components/DarkModeContext";
import WeeklySchedule from "./components/WeeklySchedule";
import { Provider } from "react-redux";
import store from "./store";
import Course from "./components/Course"; // Import the Course component
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300">
            <Navbar />
            <div className="flex flex-1">
              <SideBar />
              <div className="flex-1 p-6">
                <Routes>
                  <Route path="/WeeklySchedule" element={<WeeklySchedule />} />
                  <Route path="/courses" element={<CoursesList />} />
                  <Route path="/course/:id" element={<Course />} /> {/* Define the Course route */}
                  <Route path="/quizzes" element={<QuizList />} />
                  <Route path="/quiz/:id" element={<QuizPage />} />
                  <Route path="/documents" element={<DocumentRequest />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </DarkModeProvider>
  </React.StrictMode>
);

reportWebVitals();
