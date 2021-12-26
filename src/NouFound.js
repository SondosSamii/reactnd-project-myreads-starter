import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <h1>404!!</h1>
    <Link to="/">
      <button>Back to Home</button>
    </Link>
  </div>
);

export default NotFound;
