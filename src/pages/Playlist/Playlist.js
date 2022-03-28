import React from "react";
import PlaylistFolder from "./component/PlaylistFolder";
import "./Playlist.css";
import { useData } from "../../context/data/videoContext";
import { useNavigate } from "react-router-dom";

export function Playlist() {
  const { playlist, drawer } = useData();
  const isPlaylistFill = playlist.length > 0;
  const navigate = useNavigate();
  return (
    <div className={`video-list-container ${drawer && "disabled-click"}`}>
      <div className="container-title">
        <h3>Your Playlist</h3>
        {isPlaylistFill && (
          <div className="container-title-header">
            <span>({playlist.length} playlists) </span>
          </div>
        )}
      </div>
      {isPlaylistFill ? (
        <div>
          <div className="responsive-grid">
            {playlist.map((listFolder) => (
              <PlaylistFolder key={listFolder._id} listFolder={listFolder} />
            ))}
          </div>
        </div>
      ) : (
        <div className="message-container flex-center">
          <p className="paragraph-md">
            Looks like you haven't create playlist.
          </p>
          <button className="btn btn-start-watch" onClick={() => navigate("/")}>
            Start Creating Now
          </button>
        </div>
      )}
    </div>
  );
}
