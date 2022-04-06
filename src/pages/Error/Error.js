import React from "react";
import "./Error.css";
import error_mg from "../../assets/error.png";
export function Error() {
  console.log("error");
  return (
    <div className="video-list-container error-container">
      <img src={error_mg} className="responsive-image" />
    </div>
  );
}
