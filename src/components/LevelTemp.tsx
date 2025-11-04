import React, { useState } from "react";
import type { Level } from "../data/levels";

interface LevelProps {
  data: Level,
  onSubmit: (isCorrect: boolean) => void;
}

export const LevelComponent: React.FC<LevelProps> = ({ data, onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const isCorrect = input.trim() === data.correctAnswer.trim();
    onSubmit(isCorrect)
  };

  return (
    <div className="level">
      <h2>{data.question}</h2>
      <pre className="code-template">{data.codeTemplate}</pre>
      <input
        type="text"
        placeholder="Your answer..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};