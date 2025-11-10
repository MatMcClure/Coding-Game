import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Difficulty.css";

export const DifficultySelect: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="difficulty-select">
      <h2>Select Difficulty</h2>
      <div className="buttons">
        <button className="easy" onClick={() => navigate("/game/easy")}>Easy</button>
        <button className="medium" onClick={() => navigate("/game/medium")}>Medium</button>
        <button className="hard" onClick={() => navigate("/game/hard")}>Hard</button>
      </div>
    </div>
  );
};
