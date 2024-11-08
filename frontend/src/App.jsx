// react frontend

import React, { useState } from "react";
import axios from "axios";

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

  return (
    <div>
      <h1>Hello, React with Electron!</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={fetchHelloMessage}>Get Greeting</button>

      <p>{message}</p>
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   return (
//     <div>
//       <h1>Hello, React with Electron!</h1>
//     </div>
//   );
// };

// export default App;
