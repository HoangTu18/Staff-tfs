import { hideLoading, showLoading } from "../../component/Loading/LoadingSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { orderService } from "../../services/orderService";
import { STATUS_CODE } from "../../utils/constant";
import {
  getOrderRequest,
  getOrderSuccess,
  getOrderFailure,
} from "../../page/OrderPage/orderSlice";
function* getOrder() {
  try {
    yield put(showLoading());
    let listOrder = yield call(() => {
      return orderService.getOrder();
    });
    if (listOrder.status === STATUS_CODE.SUCCESS) {
      yield put(getOrderSuccess(listOrder.data));
    }
    yield put(hideLoading());
  } catch (error) {
    yield put(getOrderFailure(error));
    yield put(hideLoading());
    // openNotification("error", "Thất bại", "Thao tác của bạn đã thất bại");
  }
}

export function* followActiongetOrders() {
  yield takeLatest(getOrderRequest, getOrder);
}
