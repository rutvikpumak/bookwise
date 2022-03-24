import React from "react";
import { useData } from "../../context/data/videoContext";
import "./History.css";
import { useNavigate } from "react-router-dom";
import { HistoryCard } from "./HistoryCard";
import { clearHistory } from "../../services";
import { useAuth } from "../../context/auth/authContext";

export function History() {
  const { history, dispatch } = useData();
  const { token } = useAuth();
  const isHistoryFill = history.length > 0;
  const navigate = useNavigate();

  return (
    <div className="video-list-container">
      <div className="container-title">
        <h3>History</h3>
        {isHistoryFill && (
          <div className="container-title-header">
            <span>({history.length} videos) </span>
            <button
              className="btn danger btn-clear"
              onClick={() => clearHistory(dispatch, token)}
            >
              <i className="fa fa-trash" aria-hidden="true" />
              <span>Clear History</span>
            </button>
          </div>
        )}
      </div>
      {isHistoryFill ? (
        <div>
          <div className="responsive-grid">
            {history.map((video) => (
              <HistoryCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      ) : (
        <div className="message-container flex-center">
          <p className="paragraph-md">
            Looks like you haven't watch anything yet.
          </p>
          <button className="btn btn-start-watch" onClick={() => navigate("/")}>
            Start Watching Now
          </button>
        </div>
      )}
    </div>
  );
}
