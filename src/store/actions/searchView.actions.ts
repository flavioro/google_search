import {
  SEARCH_GOOGLE_START,
  SEARCH_BING_START,
  SEARCH_GOOGLE_END,
  ActionsTypes,
} from "./types";

export function onGoogleSearch(searchValue: string): ActionsTypes {
  return {
    type: SEARCH_GOOGLE_START,
    searchValue: searchValue,
    page: 1,
  };
}

export function onBingSearch(searchValue: string): ActionsTypes {
  return {
    type: SEARCH_BING_START,
    searchValue: searchValue,
    page: 1,
  };
}

export function showGoogleResults(response): ActionsTypes {
  return {
    type: SEARCH_GOOGLE_END,
    response,
  };
}
