import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import countReducer from "./countReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  count: countReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
