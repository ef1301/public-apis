import React from "react";

import Joke from "./Joke";
import Waifu from "./Waifu";
import News from './News';
import Meme from './Meme';
import Bored from './Bored';

const StressReliever = ({ time }) => {
  return (
    <>
      <div className="center">
        <Waifu time={time} />
      </div>

      <Joke time={time} />
      <News time={time}/>
      <Meme time={time}/>
      <Bored time={time}/>
    </>
  );
};

export default StressReliever;
