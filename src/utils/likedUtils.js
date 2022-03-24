import { addToLike, removeFromLike } from "../services";

export const likeHandler = (dispatch, video, token) => {
  const { _id, isInLiked } = video;
  isInLiked
    ? removeFromLike(dispatch, _id, token)
    : addToLike(dispatch, video, token);
};
