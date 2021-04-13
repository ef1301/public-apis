import React from "react";

import Joke from "./Joke";
import Waifu from "./Waifu";

const StressReliever = ({ time }) => {
  return (
    <>
      <div className="center">
        <Waifu time={time} />
      </div>

      <Joke time={time} />
    </>
  );
};

export default StressReliever;
