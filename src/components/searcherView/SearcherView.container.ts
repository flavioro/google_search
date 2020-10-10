import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import { SearcherView } from "./SearcherView.cmp";
import * as Actions from "../../store/actions/searchView.actions";
import { IState } from "../../store/actions/types";
import { IPropsSearchCmp, IDispatchSearchCmp } from "./types";

const mapStateToProps = (state: IState): IPropsSearchCmp => {
  return {
    googleResults: state.googleResults,
    bingResults: state.bingResults,
  };
};

const matchDispatchToProps = (dispatch: Dispatch): IDispatchSearchCmp => {
  return bindActionCreators(
    {
      onGoogleSearch: Actions.onGoogleSearch,
      onBingSearch: Actions.onBingSearch,
    },
    dispatch
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(SearcherView);
