"use client";
import React, { useState } from 'react';
import { quiz } from '../api/data';
import QuizForm from '../components/QuizForm';
import QuizResult from '../components/QuizResult';

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [name, setName] = useState('');

  const handleQuizStart = () => {
    setQuizStarted(true);
  };

  const handleQuizSubmit = (result) => {
    setQuizResult(result);
  };

  return (
    <div className="container mx-auto p-4">
      {!quizStarted && !quizResult && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Quiz!</h1>
          <label className="block mb-2">Enter Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border outline rounded-md px-2 py-1 w-full outline-blue-500 mb-4"
          />
          <button
            onClick={handleQuizStart}
            className="bg-blue-500 text-white py-2 w-full px-4 rounded-md"
          >
            Start Quiz
          </button>
        </div>
      )}
      {quizStarted && !quizResult && (
        <QuizForm name={name} questions={quiz.questions} onSubmit={handleQuizSubmit} />
      )}
      {quizResult && <QuizResult name={name} score={quizResult.score} />}
    </div>
  );
};

export default QuizPage;
