// react frontend

import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import yellowPaw from "../public/paw-big-yellow2.svg";
import weaselImg from "../public/weasel-right.svg";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle the API call

  const fetchHelloMessage = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/hello/${name}`);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error during fetch:", error);
      setMessage("Error fetching message");
    }
  };

  const gridItems = new Array(100).fill(null);
  return (
    <div>
      <h1 className="title">Calculator App</h1>
      <img className="weasel weasel-right" src={weaselImg} />
      <img className="weasel weasel-left" src={weaselImg} />
      <div className="grid-container">
        {gridItems.map((_, index) => {
          return (
            <div className="grid-item" key={index}>
              {index == 3 ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              ) : index == 4 ? (
                <button onClick={fetchHelloMessage}>Get Greeting</button>
              ) : index == 5 ? (
                <p>{message}</p>
              ) : (
                index + 1
                // ""
              )}{" "}
            </div>
          );
        })}
        {/* <img className="weasel weasel-right" src={weaselImg} />
        <img className="weasel weasel-left" src={weaselImg} /> */}
      </div>
    </div>
  );
};

export default App;
