import { IResults } from "../../store/actions/types";

export interface IPropsSearchCmp {
  /**
   * Results of google search
   */
  googleResults: IResults;
  /**
   * Results of bing search
   */
  bingResults: IResults;
}
/**
 * Interface used to define SearchCmp's component actions
 */
export interface IDispatchSearchCmp {
  /**
   * Action used to start process to search in google searcher
   */
  onGoogleSearch: (...args) => void;
  /**
   * Action used to start process to search in bing searcher
   */
  onBingSearch: (...args) => void;
}

export type ISearchCmp = IPropsSearchCmp & IDispatchSearchCmp;
