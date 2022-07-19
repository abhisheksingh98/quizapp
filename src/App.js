import React, { useState } from "react";
import CategorySelector from "./components/CategorySelector";
import Question from "./components/Question";

import "./App.css";
import useTdb from "./hooks/useTdb";

export default function App() {
  const { question, getQuestion, category, setCategory } = useTdb();

  return (
    <div className="app">
      <div className="question-header">
        <CategorySelector category={category} chooseCategory={setCategory} />
      </div>
      <div className="question-main">
        {question && (
          <Question
            question={question}
            answerQuestion={handleQuestionAnswered}
          />
        )}
      </div>
    </div>
  );
}
