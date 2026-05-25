import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import ScoreBoard from "./components/ScoreBoard";
import WinMsg from "./components/WinMsg";
import FrontPage from "./components/FrontPage";

function App() {
  const [newScore, setNewScore] = useState(0);
  const handleScore = (value) => {
    setNewScore(value);
  };

  const [newMoves, setNewMoves] = useState(0);
  const handleMoves = (value) => {
    setNewMoves(value);
  };

  const [reset, setReset] = useState(false);
  const handleNewGame = () => {
    setReset((prev) => !prev);
    setNewScore(0);
    setNewMoves(0);
  };

  const [value, setValue] = useState(false);
  const handleOnClick = (clickValue) => {
    setValue(clickValue);
  };

  return (
    <>
      {value ? (
        <div className="bg-black h-screen p-6 sm:px-28 sm:h-full md:px-38 lg:px-66">
          <ScoreBoard
            score={newScore}
            moves={newMoves}
            onNewGame={handleNewGame}
          />

          <Cards onScore={handleScore} onMoves={handleMoves} reset={reset} />

          {newScore === 8 && <WinMsg moves={newMoves} />}
        </div>
      ) : (
        <FrontPage onClickHandle={handleOnClick} />
      )}
    </>
  );
}

export default App;
