import React from "react";

const Waifu = ({ time }) => {
  // NOTE: placewaifu doesn't actually take in any query params
  // but in order to circumvent browser caching, we include time in the link
  return (
    <img
      alt="placewaifu.com"
      src={`https://placewaifu.com/image/400?time=${time}`}
    />
  );
};

export default Waifu;
