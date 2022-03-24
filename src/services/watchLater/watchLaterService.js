import axios from "axios";
import { ACTION_TYPE } from "../../utils";

export const addToWatchLater = (dispatch, video, token) => {
  try {
    (async () => {
      const {
        data: { watchLater },
      } = await axios.post(
        "/api/user/watchLater",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      watchLater &&
        dispatch({
          type: ACTION_TYPE.WATCH_LATER,
          payload: watchLater,
        });
    })();
  } catch (error) {
    console.log("Error in add to watchLater handler", error);
  }
};

export const removeFromWatchLater = (dispatch, id, token) => {
  try {
    (async () => {
      const {
        data: { watchLater },
      } = await axios.delete(`/api/user/watchLater/${id}`, {
        headers: {
          authorization: token,
        },
      });
      watchLater &&
        dispatch({
          type: ACTION_TYPE.WATCH_LATER,
          payload: watchLater,
        });
    })();
  } catch (error) {
    console.log("Error in remove from watchLater handler", error);
  }
};

export const clearWatchLater = (dispatch, token) => {
  try {
    (async () => {
      const {
        data: { watchLater },
      } = await axios.delete("/api/user/watchLater/all", {
        headers: {
          authorization: token,
        },
      });
      watchLater &&
        dispatch({
          type: ACTION_TYPE.WATCH_LATER,
          payload: watchLater,
        });
    })();
  } catch (error) {
    console.log("Error in clear watchLater handler", error);
  }
};
