import React from "react";

const ScoreCard = props => {
  return (
    <div>
      <p>score:</p>
      <p id='score'>{props.score}</p>
      <p>budget:</p>
      <p id='budget'>{props.goal}</p>
    </div>
  );
};

export default ScoreCard;
