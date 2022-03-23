import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useData } from "../../context/data/videoContext";
import { ACTION_TYPE } from "../../utils";

export function Navbar() {
  const [input, setInput] = useState("");
  const { dispatch } = useData();
  const searchHandler = (e) => {
    if (e.key === "Enter" || e.keyCode === 8 || e.target.value === "")
      dispatch({
        type: ACTION_TYPE.SEARCH,
        payload: e.target.value,
      });
  };

  return (
    <div className="nav-header">
      <ul className="navbar">
        <div className="navbar-main ">
          <div className="navbar-left">
            <img className="logo" src={logo} />
            <h2> Bookwise</h2>
          </div>
          <div className="search-container">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              name="search"
              className="search-bar"
              value={input}
              placeholder="Search for Videos"
              onKeyDown={(e) => searchHandler(e)}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <ul className="navbar-right">
            <li className="login">
              <Link to="login">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="search-container search-mob">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            name="search"
            className="search-bar"
            value={input}
            placeholder="Search for Videos"
            onKeyDown={(e) => searchHandler(e)}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </ul>
    </div>
  );
}
