import React, { useState } from "react";
import "./VideoCard.css";
import { Link, useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const [showList, setShowList] = useState(false);
  const { _id, title, creator } = video;
  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
        onClick={() => navigate(`/${_id}`)}
      />
      <div className="card-info" title={title}>
        <div className="card-title">
          <h3 className="card-title-header">{title}</h3>
          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div
              className={`option-list ${
                showList ? "display-flex" : "display-none"
              }`}
            >
              <div>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                Add to Watch Later
              </div>
              <div>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
                Add to Playlist
              </div>
            </div>
          </div>
        </div>

        <div className="card-description">
          <h3>{creator}</h3>
        </div>
      </div>
    </div>
  );
}
