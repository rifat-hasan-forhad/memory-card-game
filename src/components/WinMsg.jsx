const WinMsg = ({ moves }) => {
  return (
    <div className="bg-primary text-center p-4 mt-4 border border-gray-700 rounded-xl">
      <h1 className="bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-2xl font-bold">
        Cangratulations!
      </h1>
      <p className="text-gray-600 font-bold text-sm">
        You completed the game in {moves} moves!
      </p>
    </div>
  );
};

export default WinMsg;
