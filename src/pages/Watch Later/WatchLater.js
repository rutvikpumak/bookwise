import React from "react";
import { WatchLaterCard } from "./WatchLaterCard";
import { useData } from "../../context/data/videoContext";
import { useAuth } from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";

export function WatchLater() {
  const { dispatch, videos, drawer } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const watchLater = videos.filter((video) => video.isInWatchLater);
  const isWatchLaterFill = watchLater.length > 0;

  return (
    <div className={`video-list-container ${drawer && "disabled-click"}`}>
      <div className="container-title">
        <h3>Watch Later</h3>
        {isWatchLaterFill && (
          <div className="container-title-header">
            <span>({watchLater.length} videos) </span>
          </div>
        )}
      </div>
      {isWatchLaterFill ? (
        <div>
          <div className="responsive-grid">
            {watchLater.map((video) => (
              <WatchLaterCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      ) : (
        <div className="message-container flex-center">
          <p className="paragraph-md">
            Looks like you haven't added anything yet in Watch Later.
          </p>
          <button className="btn btn-start-watch" onClick={() => navigate("/")}>
            Start Adding Now
          </button>
        </div>
      )}
    </div>
  );
}
