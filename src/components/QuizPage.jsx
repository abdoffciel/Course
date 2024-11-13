import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";

const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(300); // 5-minute timer in seconds
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctness, setCorrectness] = useState({});

  // Fetch quiz details from the API
  useEffect(() => {
    axios
      .get(`http://localhost:5002/quizzes/${id}`)
      .then((response) => {
        setQuiz(response.data); // Assuming the response contains the quiz object
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Error fetching quiz. Quiz not found or server error.");
        setIsLoading(false);
      });
  }, [id]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0 && !submitted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, submitted]);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    const newCorrectness = {};
    quiz.questions.forEach((question, index) => {
      const isCorrect = answers[index] === question.answer; // Compare with the correct answer
      newCorrectness[index] = isCorrect;
    });

    setCorrectness(newCorrectness);
    setSubmitted(true); // Disable further changes after submission
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const checkAnswerStyle = (questionIndex, option) => {
    if (!submitted) return "bg-[#2C3E50] hover:bg-[#34495E]"; // Default style when not submitted
    const isCorrect = correctness[questionIndex];
    return answers[questionIndex] === option
      ? isCorrect
        ? "bg-green-500"
        : "bg-red-500"
      : "bg-[#34495E]";
  };

  if (isLoading) return <div className="text-white">Loading quiz details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="text-white p-8 min-h-screen bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500">
      {quiz && (
        <>
          <header className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-[#96C9F4]">{quiz.title}</h2>
            <p className="mt-2 text-lg text-gray-200">{quiz.description}</p>
            <div className="text-gray-300 mt-4">
              <p>Due: {quiz.dueDate}</p>
              <p>Time left: {formatTime(timer)}</p>
            </div>
          </header>

          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Questions</h3>
            <div className="space-y-6">
              {quiz.questions.map((question, index) => (
                <div key={index} className="p-4 bg-[#34495E] rounded-lg shadow-md">
                  <p className="font-semibold text-lg">{question.text}</p>
                  <div className="mt-3 space-y-3">
                    {question.options.map((option, i) => (
                      <label
                        key={i}
                        className={clsx(
                          "block p-3 rounded-lg cursor-pointer transition-all",
                          checkAnswerStyle(index, option)
                        )}
                      >
                        <input
                          type="checkbox"
                          name={`question-${index}`}
                          value={option}
                          checked={answers[index] === option}
                          onChange={() => handleAnswerChange(index, option)}
                          className="mr-2"
                          disabled={submitted} // Disable after submission
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              className="w-full md:w-1/2 py-3 text-xl text-white bg-[#3FA2F6] hover:bg-[#0F67B1] rounded-lg focus:outline-none transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
              onClick={handleSubmit}
              disabled={submitted}
            >
              {submitted ? "Quiz Submitted" : "Submit Quiz"}
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default QuizPage;
