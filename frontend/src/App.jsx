// react frontend

import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import weaselImg from "../public/weasel.svg";
import heartImg from "../public/heart.svg";

const App = () => {
  // Functions to handle the API calls

  const [number1Add, setNumber1Add] = useState(0);
  const [number2Add, setNumber2Add] = useState(0);
  const [addedNumbers, setAddedNumbers] = useState(null);

  const fetchAddedNumbers = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/op/${number1Add}/${number2Add}`
      );
      setAddedNumbers(response.data.sum);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const [number1Subtract, setNumber1Subtract] = useState(0);
  const [number2Subtract, setNumber2Subtract] = useState(0);
  const [subtractedNumbers, setSubtractedNumbers] = useState(null);

  const fetchSubtractedNumbers = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/op/${number1Subtract}/${number2Subtract}`
      );
      setSubtractedNumbers(response.data.diff);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const [number1Multiply, setNumber1Multiply] = useState(0);
  const [number2Multiply, setNumber2Multiply] = useState(0);
  const [multipliedNumbers, setMultipliedNumbers] = useState(null);

  const fetchMultipliedNumbers = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/op/${number1Multiply}/${number2Multiply}`
      );
      setMultipliedNumbers(response.data.prod);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const [number1Divide, setNumber1Divide] = useState(0);
  const [number2Divide, setNumber2Divide] = useState(0);
  const [dividedNumbers, setDividedNumbers] = useState(null);

  const fetchDividedNumbers = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/op/${number1Divide}/${number2Divide}`
      );
      setDividedNumbers(response.data.div);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  // Other functions and state variables ...

  const handleAddInputChange = () => {
    setAddedNumbers(null);
  };

  const handleSubtractInputChange = () => {
    setSubtractedNumbers(null);
  };

  const handleMultiplyInputChange = () => {
    setMultipliedNumbers(null);
  };

  const handleDivideInputChange = () => {
    setDividedNumbers(null);
  };

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
                  value={number1Add}
                  onChange={(e) => {
                    setNumber1Add(e.target.value);
                    handleAddInputChange();
                  }}
                />
              ) : index == 3 ? (
                <p className="signs">+</p>
              ) : index == 4 ? (
                <input
                  className="input"
                  type="number"
                  value={number2Add}
                  onChange={(e) => {
                    setNumber2Add(e.target.value);
                    handleAddInputChange();
                  }}
                />
              ) : index == 5 ? (
                <button className="signs button" onClick={fetchAddedNumbers}>
                  {" "}
                  ={" "}
                </button>
              ) : index == 6 ? (
                <p className="output">{addedNumbers}</p>
              ) : index == 11 ? (
                <input
                  className="input"
                  type="number"
                  value={number1Subtract}
                  onChange={(e) => {
                    setNumber1Subtract(e.target.value);
                    handleSubtractInputChange();
                  }}
                />
              ) : index == 12 ? (
                <p className="signs">-</p>
              ) : index == 13 ? (
                <input
                  className="input"
                  type="number"
                  value={number2Subtract}
                  onChange={(e) => {
                    setNumber2Subtract(e.target.value);
                    handleSubtractInputChange();
                  }}
                />
              ) : index == 14 ? (
                <button
                  className="signs button"
                  onClick={fetchSubtractedNumbers}
                >
                  {" "}
                  ={" "}
                </button>
              ) : index == 15 ? (
                <p className="output">{subtractedNumbers}</p>
              ) : index == 20 ? (
                <input
                  className="input"
                  type="number"
                  value={number1Multiply}
                  onChange={(e) => {
                    setNumber1Multiply(e.target.value);
                    handleMultiplyInputChange();
                  }}
                />
              ) : index == 21 ? (
                <p className="signs">x</p>
              ) : index == 22 ? (
                <input
                  className="input"
                  type="number"
                  value={number2Multiply}
                  onChange={(e) => {
                    setNumber2Multiply(e.target.value);
                    handleMultiplyInputChange();
                  }}
                />
              ) : index == 23 ? (
                <button
                  className="signs button"
                  onClick={fetchMultipliedNumbers}
                >
                  {" "}
                  ={" "}
                </button>
              ) : index == 24 ? (
                <p className="output">{multipliedNumbers}</p>
              ) : index == 29 ? (
                <input
                  className="input"
                  type="number"
                  value={number1Divide}
                  onChange={(e) => {
                    setNumber1Divide(e.target.value);
                    handleDivideInputChange();
                  }}
                />
              ) : index == 30 ? (
                <p className="signs">/</p>
              ) : index == 31 ? (
                <input
                  className="input"
                  type="number"
                  value={number2Divide}
                  onChange={(e) => {
                    setNumber2Divide(e.target.value);
                    handleDivideInputChange();
                  }}
                />
              ) : index == 32 ? (
                <button className="signs button" onClick={fetchDividedNumbers}>
                  {" "}
                  ={" "}
                </button>
              ) : index == 33 ? (
                <p className="output">{dividedNumbers}</p>
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
