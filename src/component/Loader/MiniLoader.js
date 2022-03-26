import React from "react";
import loaderGif from "../../assets/mini-loader.svg";
import "./Loader.css";
export function MiniLoader() {
  return (
    <div className="mini-loader-wrapper flex-center">
      <img src={loaderGif} className="mini-loader"></img>
    </div>
  );
}
