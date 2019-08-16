import React, { useState, Fragment } from "react";

const Easy = props => {
  const initialFormState = "";
  //create random number
  const [num, setNum] = useState(initialFormState);

  //stores number from input field
  const [submitValue, setSubmitValue] = useState(initialFormState);
  const [inputValue, setInputValue] = useState(initialFormState);
  const [playing, setPlaying] = useState(true);

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const setNumber = input => {
    setSubmitValue(input);
  };

  //switch screen depending on the result
  const playingStatus = input => {
    setPlaying(input);
  };

  //reset game - clear input field, values and create new random number
  const reset = () => {
    setInputValue(initialFormState);
    setSubmitValue(initialFormState);
    setPlaying(true);
    setNum(props.random(1, 10));
  };

  //calculates difference between picked number and user input number
  //to see how close the user input number is to picked number
  const guess = (num, input) => {
    let diff = Math.abs(num - input);
    let checkNum = 0;

    if (diff !== 0) {
      checkNum = diff / 10;
    }
    return checkNum;
  };

  //return results based on the condition (how close the number is)
  const compare = input => {
    if (input === "") {
      return;
    } else if (guess(props.num, input) === 0) {
      return playingStatus(false); // if the number matches, switch screen
    } // checks how close the number is and returns different values
    else if (guess(props.num, input) <= 0.1) {
      return (
        <h2>
          Boiling <i className="fas fa-thermometer-full" />
        </h2>
      );
    } else if (guess(props.num, input) <= 0.2) {
      return (
        <h2>
          Hot <i className="fas fa-thermometer-three-quarters" />
        </h2>
      );
    } else if (guess(props.num, input) <= 0.3) {
      return (
        <h2>
          Warm <i className="fas fa-thermometer-half" />
        </h2>
      );
    } else if (guess(props.num, input) <= 0.4) {
      return (
        <h2>
          Cold <i className="fas fa-thermometer-quarter" />
        </h2>
      );
    } else if (guess(props.num, input) <= 0.5) {
      return (
        <h2>
          Frosty <i className="fas fa-thermometer-empty" />
        </h2>
      );
    } else {
      return (
        <h2>
          Freezing <i className="far fa-snowflake" />
        </h2>
      );
    }
  };

  // tells user if the number is bigger or smaller than the picked number
  const biggerSmaller = input => {
    if (input === "") {
      return;
    } else if (props.num === parseInt(input)) {
      return <h2>Match</h2>;
    } else if (props.num > parseInt(input)) {
      return <h2>Bigger</h2>;
    } else {
      return <h2>Smaller</h2>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          {playing ? ( //game screen
            <Fragment>
              <h1>Guess a number between 0 and 10</h1>

              <form
                onSubmit={event => {
                  event.preventDefault();

                  setNumber(inputValue);
                }}
              >
                <input
                  className="form-control game-display"
                  id="numinput"
                  type="number"
                  min="0"
                  max="10"
                  placeholder="enter number"
                  value={inputValue}
                  onChange={handleInputChange}
                />

                <button
                  className="btn btn-lg btn-success btn-block"
                  type="submit"
                >
                  GUESS
                </button>
                <button
                  className="btn btn-lg btn-outline-warning btn-block"
                  onClick={() => {
                    reset();
                  }}
                >
                  RESET GAME
                </button>

                <div>Number picked: {props.num}</div>
                <div>Input Value: {inputValue}</div>
                <div>Submitted Value: {submitValue}</div>
                <div>{guess(props.num, inputValue)}</div>
                <div>{compare(submitValue)}</div>
                <div>{biggerSmaller(submitValue)}</div>
              </form>
            </Fragment>
          ) : (
            // result screen
            <Fragment>
              <h1>YOU GOT IT!</h1>
              <button
                className="btn btn-lg btn-success btn-block"
                onClick={() => {
                  reset();
                }}
              >
                Play Again
              </button>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Easy;
