import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  // Fetch quizzes data from the API
  useEffect(() => {
    fetch("http://localhost:5002/quizzes")
      .then((response) => response.json())
      .then((data) => setQuizzes(data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-[#96C9F4] mb-6">Upcoming Quizzes</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-[#34495E] hover:bg-[#3FA2F6] rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">{quiz.title}</h3>
                {quiz.status === "completed" ? (
                  <span className="text-green-500 text-sm">Score: {quiz.score}</span>
                ) : (
                  <span className="text-yellow-500 text-sm">Upcoming</span>
                )}
              </div>
              <p className="text-gray-400 text-sm mt-2">Due: {quiz.dueDate}</p>
              <Link
                to={`/quiz/${quiz.id}`}
                className="text-blue-500 mt-4 inline-block text-sm"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No quizzes available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default QuizList;
