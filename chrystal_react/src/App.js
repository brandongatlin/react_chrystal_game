import React, { useState, useEffect } from "react";
import "./App.css";

import Box from "./components/box";
import ScoreCard from "./components/score";

import icons from "./icons/transactions.json";

const App = () => {
  const [buys, setBuys] = useState(icons);
  let [score, setScore] = useState(0);
  const [goal, setGoal] = useState(0);

  useEffect(() => {
    const goal = Math.floor(Math.random() * 120 + 1);
    setGoal(goal);
    getRandomVal();
  }, []);

  function getRandomVal() {
    return Math.floor(Math.random() * 10 + 1);
  }

  return (
    <div className='App'>
      <ScoreCard goal={goal} score={score} />
      {buys.map(icon => (
        <Box
          key={icon.id}
          src={icon.src}
          alt={icon.name}
          value={getRandomVal()}
          click={e => {
            const purchase = parseInt(e.target.attributes.value.value);
            console.log("click", purchase);
            setScore((score += purchase));
          }}
        />
      ))}
    </div>
  );
};

export default App;
