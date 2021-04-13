import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Joke.css";

const Joke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const setup = async () => {
      await axios
        .get("https://official-joke-api.appspot.com/jokes/programming/random")
        .then(res => setJoke(res.data[0]));
    };

    setup();
  }, []);

  return (
    <div id="joke">
      {joke.setup}
      <br />
      <span className="spoiler">{joke.punchline}</span>
    </div>
  );
};

export default Joke;
