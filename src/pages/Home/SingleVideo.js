import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
import { ACTION_TYPE, watchLaterHandler } from "../../utils";
import { likeHandler } from "../../utils/likedUtils";
import "./SingleVideo.css";

export function SingleVideo() {
  const { videoId } = useParams();
  const { videos, dispatch, setModal, setModelData } = useData();
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [commentInput, setCommentInput] = useState("");
  const [copy, setCopy] = useState(false);
  const video = videos?.find((video) => video._id === videoId);
  const isInWatchLater = video && video.isInWatchLater;
  const isInLiked = video && video.isInLiked;

  const addToPlaylist = () => {
    if (token) {
      setModal(true);
      setModelData(video);
    } else {
      navigate("/login");
    }
  };

  const addCommentHandler = () => {
    const { firstName, lastName } = user;
    const commentObj = {
      user: `${firstName} ${lastName}`,
      comment: commentInput,
      color: "#d3931c",
    };
    dispatch({
      type: ACTION_TYPE.ADD_COMMENT,
      payload: {
        videoId,
        commentObj,
      },
    });
    setCommentInput("");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`https://bookwise.netlify.app/video/${videoId}`);
    setCopy(true);
  };
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
            onClick={() =>
              token
                ? likeHandler(dispatch, video, token)
                : navigate("/login", { replace: true, state: { from: location.pathname } })
            }
          >
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span> {isInLiked ? "Liked" : "Like"}</span>
          </div>
          <div
            className={`${isInWatchLater ? "is-select" : "is-not-select"}`}
            onClick={() => (token ? watchLaterHandler(dispatch, video, token) : navigate("/login"))}
          >
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <span>Watch Later</span>
          </div>
          <div className={`${copy ? "is-select" : "is-not-select"}`} onClick={() => copyLink()}>
            <i className="fa fa-files-o" aria-hidden="true"></i>
            <span>{copy ? "Copied" : "Copy"}</span>
          </div>
          <div className="is-not-select" onClick={() => addToPlaylist()}>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            <span>Save</span>
          </div>
        </div>
        <div className="footer-description">
          <h4>Description :</h4>
          <div>
            <p>{video.description}</p>
          </div>
        </div>
        <div className="comment-container">
          <h4>
            <i className="fa fa-align-left" aria-hidden="true"></i> {video.comments.length} Comments
            :
          </h4>
          <div className="comment">
            <div className="avatar sm flex-center">
              <h4>{user ? user.firstName.charAt(0).toUpperCase() : ""}</h4>
            </div>

            <div className="input comment-right">
              <input
                placeholder="Add a comment..."
                className="comment-input paragraph-sm"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                onClick={() => !token && navigate("/login")}
              />
              <div>
                <p className="paragraph-md" onClick={() => setCommentInput("")}>
                  Clear
                </p>
                <button
                  className={`btn default comment-btn ${
                    commentInput.length > 0 ? "enabled-btn" : "disabled-btn"
                  }`}
                  onClick={addCommentHandler}
                  disabled={commentInput.length === 0}
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
          {video.comments.map(({ comment, user, color }) => (
            <div key={comment} className="comment">
              <div
                style={{
                  background: color,
                }}
                className={`avatar sm flex-center`}
              >
                <h4>{user.charAt(0).toUpperCase()}</h4>
              </div>
              <div className="comment-right">
                <h4>{user}</h4>
                <p className="paragraph-sm">{comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
