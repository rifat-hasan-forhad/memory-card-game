import { useEffect, useState } from "react";

const Cards = ({ onScore, onMoves, reset }) => {
  const initialfruits = [
    "🍓",
    "🍍",
    "🥝",
    "🍉",
    "🥭",
    "🍒",
    "🌽",
    "🍌",
    "🍓",
    "🍍",
    "🥝",
    "🍉",
    "🥭",
    "🍒",
    "🌽",
    "🍌",
  ];

  const [fruits, setFruits] = useState(initialfruits);
  const shuffleCards = () => {
    const shuffled = [...initialfruits].sort(() => Math.random() - 0.5);
    setFruits(shuffled);
  };

  const [isFlipped, setFlipped] = useState(Array(fruits.length).fill(false));
  const [matched, setMatched] = useState(Array(fruits.length).fill(false));
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const handleClick = (index) => {
    if (isFlipped[index] || matched[index]) return;

    if (selected.length === 2) return;

    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = true;
      setMoves(moves + 1);

      const newSelected = [...selected, index];
      setSelected(newSelected);

      if (newSelected.length === 2) {
        const [first, second] = newSelected;

        if (fruits[first] === fruits[second]) {
          const newMatched = [...matched];
          newMatched[first] = true;
          newMatched[second] = true;

          setMatched(newMatched);
          setScore(score + 1);
          setSelected([]);
        } else {
          setTimeout(() => {
            setFlipped((prev2) => {
              const reset = [...prev2];
              reset[first] = false;
              reset[second] = false;
              return reset;
            });
            setSelected([]);
          }, 1000);
        }
      }
      return newFlipped;
    });
  };

  useEffect(() => {
    onScore(score);
    onMoves(moves);
  }, [score, moves]);

  useEffect(() => {
    shuffleCards();
    setFlipped(Array(fruits.length).fill(false));
    setMatched(Array(fruits.length).fill(false));
    setSelected([]);
    setScore(0);
    setMoves(0);
  }, [reset]);

  return (
    <div className="flex justify-center py-4 mt-8 flex-wrap">
      {fruits.map((fruit, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`text-purple-300 text-4xl text-center font-semibold ${matched[index] ? "bg-matched" : !isFlipped[index] ? "bg-primary" : "bg-offBlack"} ${matched[index] && "border-2 border-matcted-2"} w-2/9 h-20 leading-[2.2] m-1 border border-gray-700 rounded-lg cursor-pointer transition-transform duration-200 shadow-md shadow-gray-800 hover:shadow-gray-600`}
        >
          {isFlipped[index] ? fruit : "?"}
        </button>
      ))}
    </div>
  );
};

export default Cards;
