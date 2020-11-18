import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
  return (
    <div className="navigator">
      <Link
        to={{
          pathname: "/",
        }}
        className="n_home"
      >
        home
      </Link>
      <Link to="/about" className="n_home">
        about
      </Link>
      <Link to="/genre" className="n_home">
        Genre
      </Link>
    </div>
  );
}

export default Navigator;
