import React, { useState, useEffect } from "react";

const Waifu = ({ time }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count => count + 1);
  }, [time]);

  // HACK: placewaifu doesn't actually take in this count query param
  // but in order to circumvent browser caching, we include tick in the link
  return (
    <img
      alt="placewaifu.com"
      src={`https://placewaifu.com/image/400?v=${count}`}
    />
  );
};

export default Waifu;
