import React, { useEffect, useState, useCallback } from "react";

import Box from "../../box";
import data from "../../../icons/transactions.json";

import ScoreCard from "../../score";

const ClickBox = props => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const buys = data;
  let score = 0;
  const goal = Math.floor(Math.random() * 120 + 1);

  useEffect(() => {
    getRandomVal();
  }, []);

  function getRandomVal() {
    return Math.floor(Math.random() * 10 + 1);
  }

  const handleClick = e => {
    const oldScore = parseInt(document.getElementById("score").innerText);
    const purchase = parseInt(e.target.attributes.value.value);
    score = oldScore + purchase;
    checkWin(score, goal);
  };

  const checkWin = (score, goal) => {
    document.getElementById("score").innerText = score;

    if (score === goal) {
      handleWin();
    } else if (score > goal) {
      handleLose();
    }
  };

  const handleWin = () => {
    alert("win");
    resetGame();
  };

  const handleLose = () => {
    alert("lost");
    resetGame();
  };

  const resetGame = () => {
    score = 0;
    document.getElementById("score").innerText = score;
    forceUpdate();
  };

  return (
    <div>
      <ScoreCard score={score} goal={goal} />
      {buys.map(icon => (
        <Box
          key={icon.id}
          src={icon.src}
          alt={icon.name}
          value={getRandomVal()}
          click={handleClick}
        />
      ))}
    </div>
  );
};

export default ClickBox;
