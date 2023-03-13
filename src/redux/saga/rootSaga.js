import { all } from "redux-saga/effects";
import * as orderManageSaga from "./orderSaga";
import * as categoryManageSaga from "./categorySaga";
export default function* rootSaga() {
  yield all([
    orderManageSaga.followActiongetOrders(),
    orderManageSaga.followActiongetCustomer(),
    orderManageSaga.followActiongetCustomers(),
    orderManageSaga.followActionUpdateOrderStatus(),
    categoryManageSaga.followActiongetCategory(),
  ]);
}
