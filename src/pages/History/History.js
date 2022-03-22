import React from "react";
import "./History.css";
import { HistoryCard } from "./HistoryCard";

export function History() {
  return (
    <div className="video-list-container">
      <div className="container-title">
        <h3>History</h3>
        <span>2 videos</span>
      </div>
      <div className="responsive-grid">
        <HistoryCard />
      </div>
    </div>
  );
}
