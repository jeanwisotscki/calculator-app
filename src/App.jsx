import "./styles/global.css";
import ThemeSelector from "./components/ThemeSelector/index.jsx";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
