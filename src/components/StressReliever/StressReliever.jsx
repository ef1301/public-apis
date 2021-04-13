import React from "react";

import Joke from "./Joke";

const StressReliever = ({ time }) => {
  return (
    <>
      <Joke time={time} />
    </>
  );
};

export default StressReliever;
