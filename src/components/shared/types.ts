import { IResults } from "../../store/actions/types";

export interface IPropsResultList {
  /**
   * Container's title to results list
   */
  title: string;
  /**
   * Data to show after search
   */
  results: IResults;
  /**
   * Prefix to put in all items list
   */
  prefixIndex: string;
  /**
   * Handle to event change page
   */
  onHandleChangePage: (...args) => void;
}
