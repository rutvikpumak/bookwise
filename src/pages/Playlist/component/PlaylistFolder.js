import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/authContext";
import { useData } from "../../../context/data/videoContext";
import { removePlaylist } from "../../../services";
import "../Playlist.css";

export default function PlaylistFolder({ listFolder }) {
  const { dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [showList, setShowList] = useState(false);
  const { _id, title, videos } = listFolder;
  return (
    <div className="card playlistFolder">
      {videos.length > 0 ? (
        <>
          <img
            className="card-img playlistFolder"
            src={`${videos.length > 0 && `https://i.ytimg.com/vi/${videos[0]._id}/0.jpg`}`}
            onClick={() => navigate(`/playlist/${_id}`)}
          />
          <div className="card-highlight flex-center" onClick={() => navigate(`/playlist/${_id}`)}>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            <p>{videos.length}+</p>
          </div>
        </>
      ) : (
        <div className="card-img playlistFolder empty flex-center">
          <h1>{title} is Empty !</h1>
        </div>
      )}

      <div className="card-info">
        <div className="card-title">
          <h3 className="card-title-header">{title}</h3>

          <div className="ellipse" onClick={() => setShowList(!showList)}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div className={`option-list ${showList ? "display-flex" : "display-none"}`}>
              <div className="btn-trash" onClick={() => removePlaylist(dispatch, _id, token)}>
                <i className="fa fa-trash " aria-hidden="true"></i>
                Delete Playlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
