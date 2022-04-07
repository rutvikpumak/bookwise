import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useData } from "../../context/data/videoContext";
import { ACTION_TYPE } from "../../utils";
import { useAuth } from "../../context/auth/authContext";
import { useTheme } from "../../context/theme/themeContext";

export function Navbar() {
  const [input, setInput] = useState("");
  const { token } = useAuth();
  const navigate = useNavigate();
  const { dispatch, setDrawer, drawer } = useData();
  const { changeTheme } = useTheme();

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
            <i
              className="fa fa-bars drawer-hamberg-btn"
              aria-hidden="true"
              onClick={() => setDrawer(!drawer)}
            />
            <div className="logo-wrapper flex-center" onClick={() => navigate("/")}>
              <img className="logo" src={logo} />
              <h2 className="nav-header-icon"> Bookwise</h2>
            </div>
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
            <li className="nav-header-icon">
              <i
                className="fa fa-moon-o nav-header-icon"
                aria-hidden="true"
                onClick={() => changeTheme()}
              />
            </li>
            <li className="login nav-header-icon">
              {!token ? (
                <i
                  className="fa fa-sign-in"
                  aria-hidden="true"
                  onClick={() => navigate("/login")}
                />
              ) : (
                <i
                  className="fa fa-user-circle-o"
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
