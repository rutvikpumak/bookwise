import { addToWatchLater, removeFromWatchLater } from "../services";

export const watchLaterHandler = (dispatch, video, token) => {
  const { _id, isInWatchLater } = video;
  isInWatchLater
    ? removeFromWatchLater(dispatch, _id, token)
    : addToWatchLater(dispatch, video, token);
};
