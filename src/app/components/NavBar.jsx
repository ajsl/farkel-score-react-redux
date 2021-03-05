import React from "react";
import history from "../../history";
import {
  Link, NavLink
} from "react-router-dom";


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" onClick={() => history.push("/")}>
        Farkel Score
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            {/* <NavLink to="/rules">How to Play</NavLink> */}
            <a onClick={() => history.push("/rules")}>How to Play</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
