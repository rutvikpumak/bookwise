import React from "react";
import PlaylistFolder from "./component/PlaylistFolder";
import { Link } from "react-router-dom";

import "./Playlist.css";

export function Playlist() {
  return (
    <div className="video-list-container">
      <div className="container-title">
        <h3>Watch Later</h3>
        <span>2 videos</span>
      </div>
      <div className="responsive-grid">
        <PlaylistFolder />
      </div>
    </div>
  );
}
