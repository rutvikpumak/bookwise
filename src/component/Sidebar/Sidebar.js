import "./Sidebar.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
export function Sidebar() {
  const { drawer, setDrawer } = useData();
  return (
    <div className={`sidebar-container ${drawer ? "trans-on" : "trans-off"}`}>
      <ul>
        <li onClick={() => setDrawer(!drawer)}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-home" aria-hidden="true"></i>
            Home
          </NavLink>
        </li>

        <li onClick={() => setDrawer(!drawer)}>
          <NavLink
            to="/playlist"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-play-circle" aria-hidden="true"></i>Playlist
          </NavLink>
        </li>

        <li onClick={() => setDrawer(!drawer)}>
          <NavLink
            to="/liked"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-heart" aria-hidden="true"></i>Liked
          </NavLink>
        </li>

        <li onClick={() => setDrawer(!drawer)}>
          <NavLink
            to="/watchLater"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-clock-o" aria-hidden="true"></i>Watch Later
          </NavLink>
        </li>
        <li onClick={() => setDrawer(!drawer)}>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-history" aria-hidden="true"></i>History
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
