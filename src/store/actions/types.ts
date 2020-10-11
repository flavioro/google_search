export const SEARCH_GOOGLE_START = "SEARCH_GOOGLE_START";
export const SEARCH_GOOGLE_END = "SEARCH_GOOGLE_END";
export const SEARCH_BING_START = "SEARCH_BING_START";
export const SEARCH_BING_END = "SEARCH_BING_END";

interface SearchGoogleStart {
  type: typeof SEARCH_GOOGLE_START;
  page: number;
  searchValue: string;
}

interface SearchBingStart {
  type: typeof SEARCH_BING_START;
  page: number;
  searchValue: string;
}

interface SearchGoogleEnd {
  type: typeof SEARCH_GOOGLE_END;
  response: any;
}

interface SearchBingEnd {
  type: typeof SEARCH_BING_END;
  response: any;
}

export type ActionsTypes =
  | SearchGoogleStart
  | SearchBingStart
  | SearchGoogleEnd
  | SearchBingEnd;

export interface IState {
  currentSearchValue: string;
  /**
   * Results of google search
   */
  googleResults: IResults;
  /**
   * Results of bing search
   */
  bingResults: IResults;
}

export interface IResults {
  /**
   * Number of results
   */
  itemsCount: number;
  /**
   * Flag that indicated that the search is in process
   */
  loading: boolean;
  /**
   * Error un search process
   */
  error: string;
  /**
   * Current page of results
   */
  page: number;
  /**
   * Array with elements found
   */
  data: any[];
}
