import "./VideoListing.css";
import React from "react";
import VideoCard from "./components/VideoCard";

export function VideoListing() {
  return (
    <div className="video-list-container">
      <div className="category-list">
        <div className="category">All</div>
        <div className="category">Fiction</div>
        <div className="category">Non Fiction</div>
        <div className="category">Fiction</div>
      </div>

      <div className="responsive-grid">
        <VideoCard />
      </div>
    </div>
  );
}
