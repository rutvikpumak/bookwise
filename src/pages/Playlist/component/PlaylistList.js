import React from "react";
import { useParams } from "react-router-dom";
import PlaylistCard from "./PlaylistCard";
import { useData } from "../../../context/data/videoContext";

export function PlaylistList() {
  const { playListId } = useParams();
  const { playlist, drawer } = useData();
  const playlistVideo = playlist?.find((list) => list._id === playListId);
  const { title, videos } = playlistVideo;
  const isPlaylistFill = videos.length > 0;
  return (
    <div className={`video-list-container ${drawer && "disabled-click"}`}>
      <div className="container-title">
        <h3>{title}</h3>
        {isPlaylistFill && (
          <div className="container-title-header wd-inherit">
            <span>({videos.length} videos) </span>
          </div>
        )}
      </div>
      {isPlaylistFill ? (
        <div>
          <div className="responsive-grid">
            {videos.map((video) => (
              <PlaylistCard key={video.id} video={video} listId={playListId} />
            ))}
          </div>
        </div>
      ) : (
        <div className="message-container flex-center">
          <p className="paragraph-md">
            Looks like you haven't added anything in {title}.
          </p>
          <button className="btn btn-start-watch" onClick={() => navigate("/")}>
            Start Adding Now
          </button>
        </div>
      )}
    </div>
  );
}
