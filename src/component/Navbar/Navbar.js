import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useData } from "../../context/data/videoContext";
import { ACTION_TYPE } from "../../utils";
import { useAuth } from "../../context/auth/authContext";

export function Navbar() {
  const [input, setInput] = useState("");
  const { token } = useAuth();
  const navigate = useNavigate();
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
              {!token ? (
                <i
                  className="fa fa-user-circle-o"
                  aria-hidden="true"
                  onClick={() => navigate("/login")}
                />
              ) : (
                <i
                  class="fa fa-cog"
                  aria-hidden="true"
                  onClick={() => navigate("/userProfile")}
                ></i>
              )}
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
