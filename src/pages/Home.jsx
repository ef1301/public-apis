import React, { useState } from "react";

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
      <h1>News Hub</h1>
      <div>
        Last Updated: {time}
        <button onClick={updateTime}>Refresh</button>
      </div>

      <StressReliever time={time} />
    </>
  );
};

export default Home;
