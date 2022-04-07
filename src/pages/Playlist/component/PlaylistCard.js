import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";
import { useData } from "../../../context/data/videoContext";
import { removeVideoFromPlaylist } from "../../../services";

export default function PlaylistCard({ video, listId }) {
  const [showList, setShowList] = useState(false);
  const { _id, title, creator, uploaded  } = video;
  const { dispatch, videos } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
        onClick={() => navigate(`/video/${_id}`)}
      />
      <div className="card-info" title={title}>
        <div className="card-title">
          <h3 className="card-title-header">{title}</h3>
          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div className={`option-list ${showList ? "display-flex" : "display-none"}`}>
              <div
                className="btn-trash"
                onClick={() => removeVideoFromPlaylist(dispatch, listId, _id, token)}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
                Remove from Playlist
              </div>
            </div>
          </div>
        </div>

        <div className="card-description">
          <h3>{creator}</h3>
          <p>{uploaded}</p>
        </div>
      </div>
    </div>
  );
}
