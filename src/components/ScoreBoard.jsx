const ScoreBoard = () => {
  return (
    <div className="bg-primary text-center p-4 border border-gray-700 rounded-xl">
      <h1 className="text-white text-2xl font-semibold">🎮 Memory Card Game</h1>

      <div className="flex justify-center text-center space-x-4 py-3">
        <div>
          <h3 className="text-gray-600 font-bold text-sm">SCORE:</h3>
          <p className="text-2xl text-purple-400 font-bold">0</p>
        </div>

        <div>
          <h3 className="text-gray-600 font-bold text-sm">MOVES:</h3>
          <p className="text-2xl text-purple-400 font-bold">0</p>
        </div>
      </div>

      <button className="bg-linear-to-r from-blue-400 to-purple-400 text-white font-semibold px-4 py-1.5 rounded-lg cursor-pointer ">
        ⏱️ New Game
      </button>
    </div>
  );
};

export default ScoreBoard;
