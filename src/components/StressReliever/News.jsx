import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Joke.css";

const News = ({ time }) => {
  const [article, setArticles] = useState(null);

  useEffect(() => {
    const setup = async () => {
      await axios
        .get("https://saurav.tech/NewsAPI/everything/cnn.json")
        .then(res => setArticles(res.data.articles[Math.floor(Math.random() * 100)]));
    };

    setup();
  }, [time]);

  return (
      <>
      {article !== null && 
                <div id="article">
                <a href={article.url}>{article.title}</a>
                {/*<img src={article.urlToImage}></img>*/}
                <br/>
                {article.author}
                {article.publishedAt}
                {article.description}
              </div>
      }
     </>
  );
};

export default News;
