const ScoreBoard = ({ score, moves, onNewGame }) => {
  return (
    <div className="bg-primary text-center p-4 mt-8 border border-gray-700 rounded-xl">
      <h1 className="bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-2xl font-semibold">
        🎮 Memory Card Game
      </h1>

      <div className="flex justify-center text-center space-x-4 py-3">
        <div>
          <h3 className="text-gray-600 font-bold text-sm">SCORE:</h3>
          <p className="text-3xl text-purple-400 font-bold">{score}</p>
        </div>

        <div>
          <h3 className="text-gray-600 font-bold text-sm">MOVES:</h3>
          <p className="text-3xl text-purple-400 font-bold">{moves}</p>
        </div>
      </div>

      <button
        className="bg-linear-to-r from-blue-400 to-purple-400 text-white font-semibold px-4 py-1.5 rounded-lg cursor-pointer "
        onClick={onNewGame}
      >
        ⏱️ New Game
      </button>
    </div>
  );
};

export default ScoreBoard;
