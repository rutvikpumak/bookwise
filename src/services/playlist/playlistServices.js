import axios from "axios";
import { ACTION_TYPE } from "../../utils";

export const createNewPlaylist = (dispatch, name, token, setShowInput) => {
  try {
    (async () => {
      const {
        data: { playlists },
      } = await axios.post(
        "/api/user/playlists",
        {
          playlist: {
            title: name,
            description: "",
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setShowInput(false);
      playlists &&
        dispatch({
          type: ACTION_TYPE.PLAYLIST,
          payload: playlists,
        });
    })();
  } catch (error) {
    console.log("Error in add to playlist handler", error);
  }
};

export const removePlaylist = (dispatch, id, token) => {
  try {
    (async () => {
      const {
        data: { playlists },
      } = await axios.delete(`/api/user/playlists/${id}`, {
        headers: {
          authorization: token,
        },
      });
      playlists &&
        dispatch({
          type: ACTION_TYPE.PLAYLIST,
          payload: playlists,
        });
    })();
  } catch (error) {
    console.log("Error in remove from playlists handler", error);
  }
};

export const addVideoToPlaylist = (
  dispatch,
  id,
  video,
  token,
  setMiniLoader
) => {
  setMiniLoader(() => true);

  try {
    (async () => {
      const {
        data: { playlist },
      } = await axios.post(
        `/api/user/playlists/${id}`,
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      playlist &&
        dispatch({
          type: ACTION_TYPE.VIDEO_TO_PLAYLIST,
          payload: playlist,
        });
      setTimeout(() => {
        setMiniLoader(() => false);
      }, 200);
    })();
  } catch (error) {
    console.log("Error in add video to playlist handler", error);
  }
};

export const removeVideoFromPlaylist = (
  dispatch,
  id,
  videoId,
  token,
  setMiniLoader
) => {
  setMiniLoader(() => true);

  try {
    (async () => {
      const {
        data: { playlist },
      } = await axios.delete(`/api/user/playlists/${id}/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      playlist &&
        dispatch({
          type: ACTION_TYPE.VIDEO_TO_PLAYLIST,
          payload: playlist,
        });
      setTimeout(() => {
        setMiniLoader(() => false);
      }, 200);
    })();
  } catch (error) {
    console.log("Error in remove video to playlist handler", error);
  }
};
