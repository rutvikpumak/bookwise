import React from "react";
import { LikedCard } from "./LikedCard";

export function Liked() {
  return (
    <div className="video-list-container">
      <div className="container-title">
        <h3>Liked</h3>
        <span>2 videos</span>
      </div>
      <div className="responsive-grid">
        <LikedCard />
      </div>
    </div>
  );
}
