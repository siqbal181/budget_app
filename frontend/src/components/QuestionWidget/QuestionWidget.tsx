import { FC, useState } from 'react';
import './QuestionWidget.css';

interface QuestionWidgetProps {
  questionType: string;
}

const QuestionWidget: FC<QuestionWidgetProps> = ({ questionType }) => {
  const [questionNumber, setQuestionNumber] = useState(1);

  const questions = [
    'Do you track all of your monthly expenses?',
    'Have you set specific financial goals for this year?',
    'Do you regularly review and adjust your budget?',
    'Are you currently saving a portion of your income each month?',
    "Do you have an emergency fund with at least three months' worth of expenses?",
    'Are you paying off your credit card balance in full each month?',
    'Do you use a budgeting app or software to manage your finances?',
    'Have you cut back on non-essential expenses in the past six months?',
    'Do you avoid impulse purchases by making a shopping list beforehand?',
    'Are you aware of all your subscription services and their costs?',
  ];

  return (
    <div className="widget-container">
      <p>Answer some questions about your {questionType}</p>
      <div className="question-number">
        <span>{questionNumber}/10</span>
      </div>
      <div className="question-text">
        {questions.map((question, index) =>
          index === questionNumber ? <span>{question}</span> : null
        )}
      </div>
      <div className="yes-or-no">
        {questionNumber !== 10 ? (
          <>
            <button onClick={() => setQuestionNumber(questionNumber + 1)}>
              Yes
            </button>
            <button onClick={() => setQuestionNumber(questionNumber + 1)}>
              No
            </button>
          </>
        ) : (
          <span>You have completed all questions!</span>
        )}
      </div>
    </div>
  );
};

export default QuestionWidget;
