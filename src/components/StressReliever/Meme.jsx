import React, { useState, useEffect } from "react";
import axios from "axios";

const Meme = ({ time }) => {
  const [meme, setMeme] = useState(null);

  // get meme on mount (same functionality as componentDidMount)
  useEffect(() => {
    const setup = async () => {
      await axios
        .get("https://meme-api.herokuapp.com/gimme/me_irl")
        .then(res => setMeme(res.data));
    };

    setup();
  }, [time]);

  return (
    <>
      {meme !== null && // ensure meme exists
       <div className="center" id="meme">
         <span>Random meme</span>
         <br/>
         <img src={meme.url} alt={meme.title} width="25%"></img>
         <br/>
         <span><a href={meme.postLink}>{meme.title}</a> by /u/{meme.author}</span>
       </div>
      }
    </>
  );
};

export default Meme;
