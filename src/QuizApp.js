import React, { useState } from "react";
import { useHistory } from "react-router";
import "./QuizApp.css";
function QuizApp() {
  const questions = [
    {
      questionText: "What is your area of interest?",
      answerOptions: [
        { answerText: "Content Creation" },
        { answerText: "Sports" },
        { answerText: "Cybersecurity", isCorrect: true },
        { answerText: "Data Analyst" },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos" },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates" },
        { answerText: "Tony Stark" },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel" },
        { answerText: "Amazon" },
        { answerText: "Microsoft" },
      ],
    },
    {
      questionText:
        "Which is a React Hook for storing variables and updating on change?",
      answerOptions: [
        { answerText: "useStore" },
        { answerText: "useNum" },
        { answerText: "useVar" },
        { answerText: "useState", isCorrect: true },
      ],
    },
  ];

  // let selectedOptions = [];
  // for (let i = 0; i < questions.length; i++) {
  //   selectedOptions.push(null);
  // }
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const history = useHistory();
  const handleAnswerOption = (isCorrect, answerText) => {
    // if (isCorrect) {
    //   setScore(score + 1);
    // }
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answerText }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);

    const nextQues = currentQuestion + 1;
    if (nextQues < questions.length) {
      setCurrentQuestion(nextQues);
    }
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    if (prevQues >= 0) {
      setCurrentQuestion(prevQues);
    }
  };
  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    if (nextQues < questions.length) {
      setCurrentQuestion(nextQues);
    }
  };
  const handleSubmitButton = () => {
    console.log(selectedOptions);
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      // eslint-disable-next-line no-loop-func
      questions[i].answerOptions.map((answer) =>
        answer.isCorrect
          ? answer.answerText === selectedOptions[i]?.answerByUser
            ? (newScore += 1)
            : ""
          : ""
      );
    }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div className="quiz--app">
      {showScore ? (
        <div className=" text-white h-full flex flex-col items-center justify-between">
          <h1 className="text-3xl font-semibold animate-bounce">
            {" "}
            You scored {score} out of {questions.length}
          </h1>
          <button
            onClick={() => history.push("/leaderboard")}
            className="  focus:outline-none border-solid border-blue-200 hover:bg-white hover:text-gray-600  border-2 py-1 px-5 rounded-lg"
          >
            Leader Board
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count text-white">
              <span className="text-white font-bold">
                Question {currentQuestion + 1}
              </span>
              /{questions.length}
            </div>
            <div className="question-text font-mono text-white">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section ">
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <button
                className={
                  answer.answerText ===
                  selectedOptions[currentQuestion]?.answerByUser
                    ? "quiz--button m-2 bg-indigo-300"
                    : "quiz--button m-2 bg-indigo-400 bg-opacity-30"
                }
                onClick={(e) =>
                  handleAnswerOption(answer.isCorrect, answer.answerText)
                }
                key={index}
              >
                {answer.answerText}
              </button>
            ))}
          </div>
          <div className="text-white flex justify-between mt-4">
            <button
              className="focus:outline-none border-solid border-2 border-blue-200 hover:bg-white hover:text-gray-600 font-semibold py-1 px-2 rounded-lg"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="focus:outline-none border-solid border-blue-200 hover:bg-white hover:text-gray-600 font-semibold border-2 py-1 px-5 rounded-lg"
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
                  : handleNext
              }
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default QuizApp;
