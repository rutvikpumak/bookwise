import React from "react";
import "./SingleVideo.css";

export function SingleVideo() {
  return (
    <div class="play-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CmcmxPXyDuM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
      <div class="video-footer">
        <div class="footer-title">
          <h2>Do Epic Shit Review</h2>
          <h5>Ankur Warikoo</h5>
        </div>

        <div class="footer-btn-list">
          <div>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span>Like</span>
          </div>
          <div>
            <i class="fa fa-play-circle" aria-hidden="true"></i>
            <span>Save</span>
          </div>
          <div>
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <span>Watch Later</span>
          </div>
        </div>
        <div class="footer-description">
          <h4>Description :</h4>
          <div>
            <p>
              In this video, I will share with you my review of my most gifted
              book of 2021: Atomic Habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
