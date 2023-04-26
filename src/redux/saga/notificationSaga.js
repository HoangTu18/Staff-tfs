import { hideLoading, showLoading } from "../../component/Loading/LoadingSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { notificationService } from "../../services/NotificationService";
import { STATUS_CODE } from "../../utils/constant";
import {
  getNotificationRequest,
  getNotificationSuccess,
  getNotificationFailure,
} from "../../page/ProfilePage/component/Notification/notificationSlice";
function* getNoti(action) {
  try {
    yield put(showLoading());
    let listNoti = yield call(() => {
      return notificationService.getNotificationList(action.payload);
    });
    if (listNoti.status === STATUS_CODE.SUCCESS) {
      yield put(getNotificationSuccess(listNoti.data));
    }
    yield put(hideLoading());
  } catch (error) {
    yield put(getNotificationFailure(error));
    yield put(hideLoading());
  }
}

export function* followActiongetNoti() {
  yield takeLatest(getNotificationRequest, getNoti);
}
