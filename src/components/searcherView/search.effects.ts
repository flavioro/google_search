import { from } from "rxjs";
import { distinctUntilChanged, filter } from "rxjs/operators";
import { StoreType } from "../../store";
import * as Actions from "../../store/actions/searchView.actions";
import Axios from "axios";
import { ITEM_PER_PAGE } from "../constants";

export default function addSideEffect(store: StoreType) {
  listenToSearchGoogle(store);
  listenToSearchBing(store);
}

export function listenToSearchGoogle(store: StoreType) {
  from(store)
    .pipe(
      distinctUntilChanged(
        (prev, newVal) =>
          prev.googleResults.loading === newVal.googleResults.loading
      ),
      filter((state) => state.googleResults.loading)
    )
    .subscribe(async (state) => {
      const value = state.currentSearchValue;

      const key = "AIzaSyC7k8WuChqMLePRwRyCyOBJ_w2PPChZ8sM";
      const cid = "63bac932c3385993f";

      const start = (state.googleResults.page - 1) * ITEM_PER_PAGE;
      const googleAPIUrl = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cid}&start=${start}&q=${value}`;
      const googleAPIParams = {};

      Axios.get(googleAPIUrl, googleAPIParams)
        .then((response) => {
          store.dispatch(Actions.showGoogleResults(response));
        })
        .catch((error) => {
          store.dispatch(Actions.showGoogleResults("error"));
        });
    });
}

export function listenToSearchBing(store: StoreType) {
  from(store)
    .pipe(
      distinctUntilChanged(
        (prev, newVal) =>
          prev.bingResults.loading === newVal.bingResults.loading
      ),
      filter((state) => state.bingResults.loading)
    )
    .subscribe(async (state) => {
      const value = state.currentSearchValue;

      const key = "bba8d59fa5e8464f85ae04bfc31064f5";
      const cid = "2447038c-bd15-43f4-8a24-011c1a26b170";

      const offset = (state.googleResults.page - 1) * ITEM_PER_PAGE;
      const bingAPIUrl = `https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?customconfig=${cid}&q=${value}&offset=${offset}`;
      const bingAPIParams = { headers: { "Ocp-Apim-Subscription-Key": key } };

      Axios.get(bingAPIUrl, bingAPIParams)
        .then((response) => {
          store.dispatch(Actions.showBingResults(response));
        })
        .catch((error) => {
          store.dispatch(Actions.showBingResults("error"));
        });
    });
}
