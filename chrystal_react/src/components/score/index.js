import React, { useState, useEffect } from "react";

const ScoreCard = props => {
  return (
    <p>
      {props.score}/{props.goal}
    </p>
  );
};

export default ScoreCard;
