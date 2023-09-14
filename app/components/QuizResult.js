import React from 'react';

const QuizResult = ({ name, score }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
      <p className="mb-4">Name: {name}</p>
      <p className="mb-4">Score: {score}</p>
      <button className='p-2 bg-blue-500 text-white rounded' onClick={() => window.location.reload(false)}>Click to reload!</button>
    </div>
  );
};

export default QuizResult;
