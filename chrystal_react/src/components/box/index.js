import React, { useState, useEffect } from "react";

const Box = props => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      value={props.value}
      onClick={props.click}
    />
  );
};
export default Box;
