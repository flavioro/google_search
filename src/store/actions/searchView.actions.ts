import {
  SEARCH_GOOGLE_START,
  SEARCH_BING_START,
  SEARCH_GOOGLE_END,
  SEARCH_BING_END,
  ActionsTypes,
} from "./types";

export function onGoogleSearch(
  searchValue: string,
  pageNumber: number = 1
): ActionsTypes {
  return {
    type: SEARCH_GOOGLE_START,
    searchValue,
    page: pageNumber,
  };
}

export function onBingSearch(
  searchValue: string,
  pageNumber: number = 1
): ActionsTypes {
  return {
    type: SEARCH_BING_START,
    searchValue,
    page: pageNumber,
  };
}

export function showGoogleResults(response): ActionsTypes {
  return {
    type: SEARCH_GOOGLE_END,
    response,
  };
}

export function showBingResults(response): ActionsTypes {
  return {
    type: SEARCH_BING_END,
    response,
  };
}
