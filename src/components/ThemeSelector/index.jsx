import React from "react";
import "./style.css";

const index = () => {
  return (
    <div className="container">
      <div className="position">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="input">
        <input type="range" min={1} max={3} />
      </div>
    </div>
  );
};

export default index;
