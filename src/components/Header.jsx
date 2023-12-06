import React from "react";
import "../styles/Movie.css";

const Header = ({ title }) => {
  return (
    <header>
      <h2 className="fw-bold">{title}</h2>
    </header>
  );
};

export default Header;
