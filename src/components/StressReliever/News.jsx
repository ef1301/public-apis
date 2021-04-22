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
            <a href={article.url} id="article-title">{article.title}</a><br/>
            {/*<img src={article.urlToImage}></img>*/}
            <span id="article-details">{article.author}: {article.publishedAt}</span>
            <div id="article-description">
                {article.description}
            </div>
        </div>
      }
     </>
  );
};

export default News;
