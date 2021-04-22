import React from "react";

import Joke from "./Joke";
import Waifu from "./Waifu";
import News from './News';

const StressReliever = ({ time }) => {
  return (
    <>
      <div className="center">
        <Waifu time={time} />
      </div>

      <Joke time={time} />
      <News time={time}/>
    </>
  );
};

export default StressReliever;
