import React from 'react';

const QuizQuestion = ({ question, answers, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl">{question}</h2>
      <ul className="my-2">
        {answers.map((answer, index) => (
          <li className='my-2 w-full flex hover:bg-blue-400 rounded-xl p-4 text-center'  key={index}>
            <label>
              <input
                type="radio"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => onSelectAnswer(answer)}
              />
              <span  className='w-full ml-10 '>{answer}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;
