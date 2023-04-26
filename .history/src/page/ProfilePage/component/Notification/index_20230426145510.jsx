import React, { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getNotificationRequest } from "./notificationSlice";
import moment from "moment";
function Notification(props) {
  const dispatch = useDispatch();
  const listNoti = useSelector((state) => state.notiManage.listNoti);
  const staff = JSON.parse(localStorage.getItem("ACCOUNT"));
  useEffect(() => {
    dispatch(getNotificationRequest(staff.theAccountForStaff.accountId));
  }, []);
  console.log(listNoti);
  return (
    <div>
      <div className="title">
        <h1>Thông báo</h1>
      </div>
      {listNoti.map((item) => {
        return (
          <div className="noti-order" key={item.id}>
            <div className="noti-order-item">
              <h3>Thông báo</h3>
              <span>{item.message}</span>
              <br />
              <span>{moment(item.createdAt).format("DD-MM-YYYY HH:mm")}</span>
              {/* <p>Bạn có một đơn hàng mới cần xử lý, mã đơn hàng là 1069 </p>
          <p>25/4/2023 10:26</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notification;
