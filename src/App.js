import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DifficultySelect } from "./pages/DifficultySelect";
import { Game } from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<DifficultySelect />} />
        <Route path="/game/:difficulty" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
