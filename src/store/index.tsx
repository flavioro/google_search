import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IState } from "./actions/types";
import { ObservableInput } from "rxjs";

export function NewStore(
  reducer,
  initialState?
): Store<IState> & ObservableInput<IState> {
  return initialState == null
    ? createStore(reducer, composeWithDevTools())
    : createStore(reducer, initialState, composeWithDevTools());
}

export type StoreType = ReturnType<typeof NewStore>;
