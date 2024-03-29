import { all } from "redux-saga/effects";
import * as orderManageSaga from "./orderSaga";
import * as categoryManageSaga from "./categorySaga";
import * as restaurantManageSaga from "./restaurantSaga";
import * as notificaitonManageSaga from "./notificationSaga";

export default function* rootSaga() {
  yield all([
    orderManageSaga.followActiongetOrders(),
    orderManageSaga.followActiongetCustomer(),
    orderManageSaga.followActiongetCustomers(),
    orderManageSaga.followActionUpdateOrderStatus(),
    orderManageSaga.followActionInsertOrderStatus(),
    categoryManageSaga.followActiongetCategory(),
    restaurantManageSaga.followActiongetRestaurantById(),
    notificaitonManageSaga.followActiongetNoti(),
  ]);
}
