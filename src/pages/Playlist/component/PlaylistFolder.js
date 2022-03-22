import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Playlist.css";

export default function PlaylistFolder() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="card">
      <Link to="playlistList">
        <img
          className="card-img"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="card-highlight flex-center">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
          <p>1+</p>
        </div>
      </Link>
      <div className="card-info">
        <div className="card-title">
          <input
            className="card-title-header"
            type="text"
            value="Lorem Ipsum"
            disabled
          />

          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div
              className={`option-list ${
                showList ? "display-flex" : "display-none"
              }`}
            >
              <div>
                <i className="fa fa-edit" aria-hidden="true"></i>
                Edit Playlist Name
              </div>
              <div>
                <i className="fa fa-trash" aria-hidden="true"></i>
                Delete Playlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
