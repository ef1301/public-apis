import React, { useState } from "react";

import "./Home.css";

import StressReliever from "../components/StressReliever";

const stringifyDate = date =>
  `${date.toLocaleDateString("en-US")} ${date.toLocaleTimeString("en-US")} `;

const Home = () => {
  const [time, setTime] = useState(stringifyDate(new Date()));

  const updateTime = () => {
    setTime(stringifyDate(new Date()));
  };

  return (
    <>
      <h1 className="center">News/Joke/Meme/Bored APIs</h1>
      <div className="center">
        Last Updated: {time}
        <button onClick={updateTime}>Refresh</button>
      </div>

      <StressReliever time={time} />
    </>
  );
};

export default Home;
