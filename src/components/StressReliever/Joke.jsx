import React, { useState, useEffect } from "react";
import axios from "axios";

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

  console.log(joke);
  return (
    <>
      {joke.setup}
      <br />
      {joke.punchline}
    </>
  );
};

export default Joke;
