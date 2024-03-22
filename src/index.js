import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
function Test() {
  const [moviesRating, setMoviesRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMoviesRating} />
      <p>Rating is {moviesRating}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
