import "./styles/global.css";
import ThemeSelector from "./components/ThemeSelector/index.jsx";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(1);

  return (
    <div className="App">
      <ThemeSelector theme={theme} setTheme={setTheme} />

      {/* <div>
        <header>
          <strong>calc</strong>
          <div>
            <span>theme</span>
          </div>
        </header>

        <section id="screen">
          <p>399,981</p>
        </section>

        <section id="buttons">
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <button className="btn">1</button>
          <div className="teste">
            <button>RESET</button>
            <button>=</button>
          </div>
        </section>
      </div> */}
    </div>
  );
}

export default App;
