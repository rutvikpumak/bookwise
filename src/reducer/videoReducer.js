import { ACTION_TYPE } from "../utils";

export const initialState = {
  videos: [],
  category: [],
  sortBy: "",
  search: "",
  history: [],
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INIT_VIDEOS:
      return {
        ...state,
        videos: action.payload,
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
    case ACTION_TYPE.ADD_TO_HISTORY:
      return {
        ...state,
        history: [...action.payload],
      };
    case ACTION_TYPE.REMOVE_FROM_HISTORY:
      return {
        ...state,
        history: [...action.payload],
      };
    case ACTION_TYPE.CLEAR_HISTORY:
      return {
        ...state,
        history: [...action.payload],
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
