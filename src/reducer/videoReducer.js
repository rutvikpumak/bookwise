import { ACTION_TYPE } from "../utils";

export const initialState = {
  videos: [],
  category: [],
  sortBy: "",
  search: ""
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INIT_VIDEOS:
      return {
        ...state,
        videos: [
          ...action.payload.map((video) => ({
            ...video,
            isInHistory: false,
            isInWatchLater: false,
            isInLiked: false,
          })),
        ],
      };
    case ACTION_TYPE.INIT_CATEGORIES:
      return {
        ...state,
        category: [
          ...action.payload.map((cat) => ({
            ...cat,
            isActive: false,
          })),
        ],
      };
    case ACTION_TYPE.SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
        category: state.category.map((cat) =>
          cat.categoryName === action.payload
            ? {
                ...cat,
                isActive: true,
              }
            : {
                ...cat,
                isActive: false,
              }
        ),
      };
    case ACTION_TYPE.HISTORY:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isInHistory: action.payload.some((ele) => ele._id === video._id),
        })),
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case ACTION_TYPE.LOG_OUT:
      return {
        ...state,
        // history: [],
      };
  }
};
