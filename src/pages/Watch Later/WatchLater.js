import React from "react";
import { WatchLaterCard } from "./WatchLaterCard";

export function WatchLater() {
  return (
    <div className="video-list-container">
      <div className="container-title">
        <h3>Watch Later</h3>
        <span>2 videos</span>
      </div>
      <div className="responsive-grid">
        <WatchLaterCard />
      </div>
    </div>
  );
}
