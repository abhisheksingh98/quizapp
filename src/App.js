import React, { useState } from "react";
import CategorySelector from "./components/CategorySelector";

import "./App.css";
import useTdb from "./hooks/useTdb";

export default function App() {
  const { category, setCategory } = useTdb();

  return (
    <div className="app">
      <div className="question-header">
        <CategorySelector category={category} chooseCategory={setCategory} />
      </div>
    </div>
  );
}
