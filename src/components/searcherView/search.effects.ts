import { from } from "rxjs";
import { distinctUntilChanged, filter } from "rxjs/operators";
import { StoreType } from "../../store";
import * as Actions from "../../store/actions/searchView.actions";
import { searchGoogle, searchBing } from "./search.services";

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

      const response = await searchGoogle(value, state.googleResults.page);

      store.dispatch(Actions.showGoogleResults(response));
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

      const response = await searchBing(value, state.bingResults.page);

      store.dispatch(Actions.showBingResults(response));
    });
}
