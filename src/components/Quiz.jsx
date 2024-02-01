import { useState, useCallback } from "react";
import TEST from "../questions.js";
import quizCompeletedImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === TEST.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnwser) => {
      return [...prevAnwser, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompeletedImg} alt="Quiz completed showing image" />
        <h2>Quiz Compeleted!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
