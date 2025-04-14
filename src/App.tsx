//import "./App.css";
//import { Link } from "react-router-dom";

//export const App = () => {
  //return <Link to="/login"> Login </Link>;
//};

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/") // Fetch FastAPI data
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>React & FastAPI Connection</h1>
      <p>{message}</p> {/* Display API message */}
      <Link to="/login"> Login </Link>
    </div>
  );
};

export default App;

