import "./VideoListing.css";
import React, { useState } from "react";
import VideoCard from "./components/VideoCard";
import { useData } from "../../context/data/videoContext";
import { ACTION_TYPE } from "../../utils";
import { searchVideos, sortVideos, sortVideosByDate } from "../../services";

export function VideoListing() {
  const { category, videos, dispatch, sortBy, sortByDate, search, setLoader, drawer } = useData();

  const sortHandler = (catName) => {
    setLoader(true);
    setTimeout(() => {
      dispatch({ type: ACTION_TYPE.SORT_BY, payload: catName });
      setLoader(false);
    }, 500);
  };

  const searchByName = searchVideos([...videos], search);
  const sortByCategory = sortVideos(searchByName, sortBy);
  const sortLatest = sortVideosByDate(sortByCategory, sortByDate);

  return (
    <div className={`video-list-container ${drawer && "disabled-click"}`}>
      <div className="category-list">
        {category.map(({ _id, categoryName, isActive }) => (
          <div
            key={_id}
            className={`category ${isActive && "active-category"}`}
            onClick={() => sortHandler(categoryName)}
          >
            {categoryName}
          </div>
        ))}
      </div>
      <div className="sort-btn" onClick={() => dispatch({ type: ACTION_TYPE.SORT_BY_DATE })}>
        {sortByDate ? (
          <>
            <span>Clear</span>
          </>
        ) : (
          <>
            <i className="fa fa-sort-amount-desc" aria-hidden="true" />
            <span>Sort Latest</span>
          </>
        )}
      </div>

      <div className="responsive-grid">
        {sortLatest.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
