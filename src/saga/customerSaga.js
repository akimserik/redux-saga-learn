import { put, takeEvery, call } from "redux-saga/effects";
import {
  ASYNC_ADD_MANY_CUSTOMERS,
  addManyCustomersAction,
} from "../store/customerReducer";

const fetchUsersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users?limit=10");

function* customersWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(addManyCustomersAction(json));
}

export function* customerWatcher() {
  yield takeEvery(ASYNC_ADD_MANY_CUSTOMERS, customersWorker);
}
