import { all } from "redux-saga/effects";
import * as orderManageSaga from "./orderSaga";
export default function* rootSaga() {
  yield all([
    orderManageSaga.followActiongetOrders(),

  ]);
}
