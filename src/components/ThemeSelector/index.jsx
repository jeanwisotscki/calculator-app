import React from "react";
import Theme1 from "../../styles/themes/Theme1";
import Theme2 from "../../styles/themes/Theme2";
import Theme3 from "../../styles/themes/Theme3";

import "./style.css";

const index = ({ theme, setTheme }) => {
  return (
    <div className="container">
      <div className="position">
        <button onClick={() => setTheme(1)}>1</button>
        <button onClick={() => setTheme(2)}>2</button>
        <button onClick={() => setTheme(3)}>3</button>
      </div>

      {theme === 1 ? <Theme1 /> : null}
      {theme === 2 ? <Theme2 /> : null}
      {theme === 3 ? <Theme3 /> : null}

      <strong style={{ color: "black" }}>tema {theme}</strong>
    </div>
  );
};

export default index;
