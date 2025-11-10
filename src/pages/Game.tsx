import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { levels } from "../data/levels";
import { LevelComponent } from "../components/LevelTemp";

export const Game: React.FC = () => {
  const { difficulty } = useParams<{ difficulty: string }>();
  const filteredLevels = levels.filter(l => l.difficulty === difficulty);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLevel = filteredLevels[currentIndex];

  const handleResult = (isCorrect: boolean) => {
    if (isCorrect && currentIndex < filteredLevels.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (isCorrect) {
      alert("🎉 You completed all levels!");
    } else {
      alert("❌ Try again!");
    }
  };

  return (
    <div className="game">
      <h2>{difficulty?.toUpperCase()} Mode</h2>
      {currentLevel && (
        <LevelComponent data={currentLevel} onSubmit={handleResult} />
      )}
    </div>
  );
};
