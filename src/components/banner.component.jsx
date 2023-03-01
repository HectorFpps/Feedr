import React from "react";

const Banner = ({ message, type }) => {
  let bannerStyle = "";
  if (type === "success") {
    bannerStyle = "bg-green-400";
  } else if (type === "warning") {
    bannerStyle = "bg-yellow-400";
  } else if (type === "error") {
    bannerStyle = "bg-red-400";
  }

  return (
    <div className={`p-4 ${bannerStyle}`}>
      <p className="text-white">{message}</p>
    </div>
  );
};

export default Banner;