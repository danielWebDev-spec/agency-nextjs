import React from "react";

const Circle = ({ top, left, bottom, right, backgroundColor }) => {
  return (
    <div
      className="circle"
      style={{ top, left, bottom, right, backgroundColor }}
    />
  );
};

export default Circle;
