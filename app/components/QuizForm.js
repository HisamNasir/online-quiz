"use client";
import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";

const QuizForm = ({ questions, onSubmit }) => {
  const [name, setName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = questions.reduce((totalScore, question) => {
        if (selectedAnswers[question.id] === question.correctAnswer) {
          return totalScore + 1;
        }
        return totalScore;
      }, 0);
      onSubmit({ name, score });
    }
  };

  const onSelectAnswer = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQuestion].id]: answer,
    });
  };

  return (
    <div className="w-full flex border border-black p-10 rounded-2xl  flex-col">
      <h1 className="text-6xl font-bold w-full text-center mb-4">Quiz Time!</h1>
      <form onSubmit={handleNextQuestion}>
        <QuizQuestion
          question={questions[currentQuestion].question}
          answers={questions[currentQuestion].answers}
          selectedAnswer={selectedAnswers[questions[currentQuestion].id] || ""}
          onSelectAnswer={onSelectAnswer}
        />
        <button
          type="button"
          onClick={handleNextQuestion}
          className="bg-blue-500 text-white py-2 w-full px-4 rounded-md"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default QuizForm;
