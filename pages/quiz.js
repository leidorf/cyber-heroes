import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/api/questions");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions: ", error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
      const answers = [...questions[currentQuestionIndex].answers];
      setShuffledAnswers(shuffleArray(answers));
      setSelectedAnswerIndex(null);
    }
  }, [currentQuestionIndex]);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const handleAnswerSelect = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correctAnswer];

    if (selectedAnswerIndex !== null) return;

    setSelectedAnswerIndex(shuffledAnswers.indexOf(answer));

    if (answer === correctAnswer) {
      setScore(score + questions[currentQuestionIndex].point);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(questions.length);
    }
  };

  const handleStartQuiz = () => {
    setShowIntro(false);
    setCurrentQuestionIndex(0);
  };

  return (
    <Layout>
      <PageHead headTitle={`Quiz`} />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
        <div className="w-8/12 lg:w-1/3 md:w-1/2 sm:w-8/12">
          <div className="border-2 rounded-lg border-yellow-500 p-4 w-full mb-12 shadow-lg">
            <div className="flex justify-between">
              <p className="text-4xl mb-4 underline decoration-yellow-500 text-yellow-500 grinched decoration-wavy">Quiz</p>
              <Link
                href="/"
                className="block text-center text-2xl"
              >
                ←
              </Link>
            </div>

            {showIntro ? (
              <div>
                <p className="mb-4">
                  Welcome to Cyber ​​Heroes! With this quiz you can test your knowledge on internet security and digital
                  security.
                </p>
                <button
                  onClick={handleStartQuiz}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Start
                </button>
              </div>
            ) : currentQuestionIndex < questions.length ? (
              <div>
                <p className="text-lg font-semibold whitespace-pre-line">
                  Question {currentQuestionIndex + 1}:{"\n"}
                  {questions[currentQuestionIndex].question}
                </p>
                <ul className="mt-2 space-y-2">
                  {shuffledAnswers.map((answer, index) => {
                    const isSelected = index === selectedAnswerIndex;
                    const correctAnswer =
                      questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correctAnswer];
                    let bgColor = "";
                    if (isSelected) {
                      bgColor = answer === correctAnswer ? "bg-green-200 dark:bg-green-800" : "bg-red-200 dark:bg-red-800";
                    }
                    return (
                      <li
                        key={index}
                        onClick={() => handleAnswerSelect(answer)}
                        className={`p-2 border rounded-lg ${
                          selectedAnswerIndex === null ? "hover:bg-yellow-100 dark:hover:bg-yellow-400/50 cursor-pointer" : ""
                        } ${bgColor}`}
                      >
                        {answer}
                      </li>
                    );
                  })}
                </ul>
                {selectedAnswerIndex !== null && (
                  <button
                    onClick={handleNextQuestion}
                    className="mt-4 px-4 py-1 bg-blue-500 text-white rounded-lg"
                  >
                    Next
                  </button>
                )}
              </div>
            ) : (
              <div>
                <p className="text-lg font-semibold">Quiz Completed!</p>
                <p className="mt-2">
                  Total Score: <span className="text-green-600 font-bold">{score}</span>!
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-block text-blue-500 underline"
                >
                  Main Menu
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
