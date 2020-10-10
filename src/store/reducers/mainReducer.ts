import {
  SEARCH_GOOGLE_START,
  SEARCH_BING_START,
  SEARCH_GOOGLE_END,
  ActionsTypes,
  IState,
} from "../actions/types";

export const defaultState: IState = {
  currentSearchValue: "",
  googleResults: {
    itemsCount: 0,
    loading: false,
    error: "",
    page: 1,
    data: [],
  },
  bingResults: {
    itemsCount: 0,
    loading: false,
    error: "",
    page: 1,
    data: [],
  },
};

export const mainReducer = (
  state: IState = defaultState,
  action: ActionsTypes
) => {
  switch (action.type) {
    case SEARCH_GOOGLE_START: {
      return {
        ...state,
        currentSearchValue: action.searchValue,
        googleResults: {
          ...state.googleResults,
          loading: true,
          page: action.page,
        },
      };
    }
    case SEARCH_BING_START: {
      return {
        ...state,
        currentSearchValue: action.searchValue,
        bingResults: {
          ...state.bingResults,
          loading: true,
          page: action.page,
        },
      };
    }
    case SEARCH_GOOGLE_END: {
      let googleResults = {};

      if (action.response === "error") {
        googleResults = Object.assign({}, state.googleResults, {
          data: [],
          itemsCount: 0,
          error: action.response,
          page: state.googleResults.page,
          loading: false,
        });
      } else {
        googleResults = Object.assign({}, state.googleResults, {
          data: action.response.data.items,
          itemsCount: action.response.data.searchInformation.totalResults,
          error: "",
          page: state.googleResults.page,
          loading: false,
        });
      }

      return {
        ...state,
        googleResults,
      };
    }
    default: {
      return state;
    }
  }
};

export default mainReducer;
