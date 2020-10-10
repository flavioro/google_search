import { connect } from "react-redux";
import { ResultList } from "./ResultList.cmp";
import { IState } from "../../store/actions/types";
import { IPropsResultList } from "./types";

const mapStateToProps = (state: IState, props): IPropsResultList => {
  return {
    title: props.title,
    results: props.results,
    prefixIndex: props.prefixIndex,
    onHandleChangePage: props.onHandleChangePage,
  };
};

export default connect(mapStateToProps)(ResultList);
