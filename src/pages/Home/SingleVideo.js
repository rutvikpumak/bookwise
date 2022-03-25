import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
import { addToLike } from "../../services";
import { watchLaterHandler } from "../../utils";
import { likeHandler } from "../../utils/likedUtils";
import "./SingleVideo.css";

export function SingleVideo() {
  const { videoId } = useParams();
  const { videos, dispatch } = useData();
  const { token } = useAuth();

  const video = videos?.find((video) => video._id === videoId);
  const isInWatchLater = video && video.isInWatchLater;
  const isInLiked = video && video.isInLiked;

  return video ? (
    <div className="play-container">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${video._id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      ></iframe>
      <div className="video-footer">
        <div className="footer-title">
          <h2>{video.title}</h2>
          <h5>{video.creator}</h5>
        </div>

        <div className="footer-btn-list">
          <div
            className={`${isInLiked ? "is-select" : "is-not-select"}`}
            onClick={() => likeHandler(dispatch, video, token)}
          >
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span> {isInLiked ? "Liked" : "Like"}</span>
          </div>
          <div className="is-not-select">
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            <span>Save</span>
          </div>
          <div
            className={`${isInWatchLater ? "is-select" : "is-not-select"}`}
            onClick={() => watchLaterHandler(dispatch, video, token)}
          >
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <span>Watch Later</span>
          </div>
        </div>
        <div className="footer-description">
          <h4>Description :</h4>
          <div>
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
