// react frontend

import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import weaselImg from "../public/weasel.svg";
import heartImg from "../public/heart.svg";

const App = () => {
  // Functions to handle the API calls

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [addedNumbers, setAddedNumbers] = useState(null);

  const fetchAddedNumbers = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/add/${number1}/${number2}`
      );
      setAddedNumbers(response.data.sum);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  // Other functions and state variables ...

  const [showHeart, setShowHeart] = useState(false);

  const gridItems = new Array(81).fill(null);

  // HTML
  return (
    <div>
      <h1 className="title">Weasel Calculator</h1>
      <div className="grid-container">
        {gridItems.map((_, index) => {
          return (
            <div className="grid-item" key={index}>
              {index == 2 ? (
                <input
                  className="input"
                  type="number"
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                />
              ) : index == 3 ? (
                <p className="signs">+</p>
              ) : index == 4 ? (
                <input
                  className="input"
                  type="number"
                  value={number2}
                  onChange={(e) => setNumber2(e.target.value)}
                />
              ) : index == 5 ? (
                <button className="signs button" onClick={fetchAddedNumbers}>
                  {" "}
                  ={" "}
                </button>
              ) : index == 6 ? (
                <p className="output">{addedNumbers}</p>
              ) : index == 38 ? (
                <img className="weasel" src={weaselImg} />
              ) : index == 39 ? (
                <p className="signs">+</p>
              ) : index == 40 ? (
                <img
                  className="weasel"
                  style={{ transform: "scaleX(-1)" }}
                  src={weaselImg}
                />
              ) : index == 41 ? (
                <button
                  className="signs button"
                  onClick={() => setShowHeart((showing) => !showing)}
                >
                  {" "}
                  ={" "}
                </button>
              ) : index === 42 && showHeart ? (
                <img src={heartImg} />
              ) : (
                // index + 1
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
