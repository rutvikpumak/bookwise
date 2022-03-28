import React from "react";
import { useData } from "../../context/data/videoContext";
import { useNavigate } from "react-router-dom";
import { LikedCard } from "./LikedCard";
export function Liked() {
  const { videos, drawer } = useData();
  const navigate = useNavigate();

  const like = videos.filter((video) => video.isInLiked);
  const isLikedFill = like.length > 0;

  return (
    <div className={`video-list-container ${drawer && "disabled-click"}`}>
      <div className="container-title">
        <h3>Like</h3>
        {isLikedFill && (
          <div className="container-title-header">
            <span>({like.length} videos) </span>
          </div>
        )}
      </div>
      {isLikedFill ? (
        <div>
          <div className="responsive-grid">
            {like.map((video) => (
              <LikedCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      ) : (
        <div className="message-container flex-center">
          <p className="paragraph-md">
            Looks like you haven't liked anything yet.
          </p>
          <button className="btn btn-start-watch" onClick={() => navigate("/")}>
            Start Adding Now
          </button>
        </div>
      )}
    </div>
  );
}
