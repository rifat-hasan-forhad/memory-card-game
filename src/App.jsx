import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import ScoreBoard from "./components/ScoreBoard";
import WinMsg from "./components/WinMsg";

function App() {
  const [newScore, setNewScore] = useState(0);
  const handleScore = (value) => {
    setNewScore(value);
  };

  const [newMoves, setNewMoves] = useState(0);
  const handleMoves = (value) => {
    setNewMoves(value);
  };

  return (
    <div className="bg-black h-screen p-6">
      <ScoreBoard score={newScore} moves={newMoves} />

      <Cards onScore={handleScore} onMoves={handleMoves} />

      {newScore === 8 && <WinMsg moves={newMoves} />}
    </div>
  );
}

export default App;
