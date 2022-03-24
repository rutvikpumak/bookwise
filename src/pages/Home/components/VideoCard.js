import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";
import { useData } from "../../../context/data/videoContext";
import { addToHistory } from "../../../services";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { dispatch, history } = useData();
  const [showList, setShowList] = useState(false);
  const { _id, title, creator } = video;

  const isInHistory = history.find((historyVideo) => historyVideo._id === _id);

  const clickToVideoHandler = () => {
    navigate(`/${_id}`);
    token && !isInHistory && addToHistory(dispatch, video, token);
  };
  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
        onClick={() => clickToVideoHandler()}
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
