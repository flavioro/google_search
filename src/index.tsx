import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addSideEffectsToStore } from "./services";
import { NewStore, StoreType } from "./store";
import mainReducer from "./store/reducers/mainReducer";
import "./index.css";
import App from "./App";

// Create store
const store: StoreType = NewStore(mainReducer);

// Add side effects listener to the store
addSideEffectsToStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
