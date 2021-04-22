import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles.css";

const Bored = ({ time }) => {
  const [activity, setActivity] = useState([]); //setting up props for bored api

  useEffect(() => {
    const setup = async () => {
      await axios
        .get("https://www.boredapi.com/api/activity") //calls bored api
        .then(res => { 
          setActivity(res.data.activity)
        })
        .catch()
    };

    setup();
  }, [time]);

  return (
      <div id="bored">
        <br/>
        <b>Random thing to do when you're bored:</b>
        <h1 className="activity">{activity}</h1>
      </div>
  );
};

export default Bored;
