import React, { useState } from "react";
import "./App.css";
import Easy from "./components/Easy";
import Medium from "./components/Medium";
import Hard from "./components/Hard";
import { EASY, MEDIUM, HARD } from "./constants";

const App = () => {
  const [path, setPath] = useState("");
  const [num, setNum] = useState("");

  // create random number between 1 and max number(depending on the game you select)
  const random = (min, max) => {
    let rand = Math.trunc(Math.random() * (max - min + 1) + min);
    setNum(rand);
  };

  // calls selected component
  const renderPath = path => {
    switch (path) {
      case EASY:
        return <Easy num={num} random={random} />;
      case MEDIUM:
        return <Medium num={num} random={random} />;
      case HARD:
        return <Hard num={num} random={random} />;
      default:
        return <h1 id="title">Select difficulty to start game</h1>;
    }
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <button
            className="col-md-4 mx-auto btn btn-success"
            onClick={() => {
              setPath(EASY);
              random(1, 10);
            }}
          >
            EASY
          </button>
          <button
            className="col-md-4 mx-auto btn btn-primary"
            onClick={() => {
              setPath(MEDIUM);
              random(1, 100);
            }}
          >
            MEDIUM
          </button>
          <button
            className="col-md-4 mx-auto btn btn-danger"
            onClick={() => {
              setPath(HARD);
              random(1, 1000);
            }}
          >
            HARD
          </button>
          <div>{renderPath(path)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
