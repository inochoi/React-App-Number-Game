import React, { useState, Fragment } from "react";
import App from "../App";

const Input = props => {
  const initialFormState = "";
  const [num, setNum] = useState(initialFormState);
  const [selectedGame, setSelectedGame] = useState(initialFormState);
  const [maxNum, setMaxNum] = useState(initialFormState);
  const [inputValue, setInputValue] = useState(initialFormState);
  const [playing, setPlaying] = useState(true);
  const [input, setInput] = useState(props.initialFormState);

  const handleInputChange = event => {
    const { value } = event.target;
    setInput(value);
  };

  const random = (min, max) => {
    let rand = Math.trunc(Math.random() * (max - min + 1) + min);
    setNum(rand);
  };

  const selectGame = (game, max) => {
    setSelectedGame(game);
    setMaxNum(max);
  };

  const playGame = () => {
    setPlaying(true);
  };

  const setNumber = input => {
    setInputValue(input);
  };

  const compare = input => {
    if (num === parseInt(input)) {
      return <h2>Match</h2>;
    } else if (input == "") {
      return;
    } else {
      return <h2>No Match</h2>;
    }
  };

  const click = key => {
    switch (key) {
      case "easy":
        return <h1>Guess between 0 and {maxNum}</h1>;

      case "medium":
        return <h1>Guess between 0 and {maxNum}</h1>;

      case "hard":
        return <h1>Guess between 0 and {maxNum}</h1>;

      default:
        return <h1>Select difficulty to start game</h1>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          {playing ? (
            <Fragment>
              <div>{click(selectedGame)}</div>

              <button
                className="btn btn-primary"
                onClick={() => {
                  random(0, 10);
                  selectGame("easy", 10);
                  setPlaying(false);
                }}
              >
                Easy
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  random(0, 100);
                  selectGame("medium", 100);
                  setPlaying(false);
                }}
              >
                Medium
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  random(0, 1000);
                  selectGame("hard", 1000);
                  setPlaying(false);
                }}
              >
                Hard
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <div>{click(selectedGame)}</div>

              <button
                className="btn btn-primary"
                onClick={() => {
                  random(0, 10);
                  selectGame("easy", 10);
                }}
              >
                Easy
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  random(0, 100);
                  selectGame("medium", 100);
                }}
              >
                Medium
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  random(0, 1000);
                  selectGame("hard", 1000);
                }}
              >
                Hard
              </button>
              <form
                onSubmit={event => {
                  event.preventDefault();

                  props.setNumber(input);
                }}
              >
                <input
                  className="form-control game-display"
                  id="numinput"
                  type="number"
                  min="0"
                  max={props.maxNum}
                  placeholder="enter number"
                  value={input}
                  onChange={handleInputChange}
                />

                <button
                  className="btn btn-lg btn-success btn-block"
                  type="submit"
                >
                  Guess
                </button>
                <div>{input}</div>
              </form>
              <div>{num}</div>
              <div>{compare(inputValue)}</div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
