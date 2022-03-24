import axios from "axios";
import { ACTION_TYPE } from "../../utils";

export const addToLike = (dispatch, video, token) => {
  try {
    (async () => {
      const {
        data: { likes },
      } = await axios.post(
        "/api/user/likes",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      likes &&
        dispatch({
          type: ACTION_TYPE.LIKE,
          payload: likes,
        });
    })();
  } catch (error) {
    console.log("Error in add to likes handler", error);
  }
};

export const removeFromLike = (dispatch, id, token) => {
  try {
    (async () => {
      const {
        data: { likes },
      } = await axios.delete(`/api/user/likes/${id}`, {
        headers: {
          authorization: token,
        },
      });
      likes &&
        dispatch({
          type: ACTION_TYPE.LIKE,
          payload: likes,
        });
    })();
  } catch (error) {
    console.log("Error in remove from likes handler", error);
  }
};
