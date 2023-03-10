import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import StateList from "../../component/ListState";
import { formatStringToDate, formatStringToTime } from "../../utils/DateUtil";
import { formatToVND } from "../../utils/numberUtil";
import {
  getCustomerRequest,
  getListCustomerRequest,
  getOrderRequest,
  updateOrderRequest,
} from "../OrderPage/orderSlice";
import Button from "@mui/material/Button";

import "./index.scss";
import { ORDER } from "../../utils/constant";
function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  let order = JSON.parse(localStorage.getItem(ORDER));
  console.log("re-Render");

  const backToOrderPage = () => {
    navigate("/order");
  };
  const dispatch = useDispatch();
  const ListCustomer = useSelector((state) => state.orderManage.listCustomer);

  useEffect(() => {
    dispatch(getListCustomerRequest());
  }, [dispatch]);

  const getNameByCusId = (id) => {
    let data = ListCustomer.find((item) => item.customerId === +id);
    if (data !== undefined) {
      return data.customerName ?? "";
    }
    return "";
  };

  const getPhoneByCusId = (id) => {
    let data = ListCustomer.find((item) => item.customerId === +id);
    if (data !== undefined) {
      return data.theAccount.phoneNumber ?? "";
    }
    return "";
  };

  const handleChangeStatus = (order) => {
    let status = "pending";
    switch (order.status) {
      case "pending":
        status = "accept";
        break;
      case "accept":
        status = "delivery";
        break;
      case "delivery":
        status = "done";
        break;
      case "done":
        status = "done";
        break;
      default:
        break;
    }
    const data = {
      orderId: order.id,
      staffId: order.staffId,
      status: status,
    };
    console.log(data);
    dispatch(updateOrderRequest(data));
  };

  return (
    <div className="order-detail">
      <div className="order-detail__title">
        <img src="/images/back-icon.svg" alt="" onClick={backToOrderPage} />
        <h2>????n h??ng {id}</h2>
      </div>

      <div className="order-detail__time">
        <p>
          Ng??y ?????t ????n h??ng: {formatStringToDate(order.orderDate.split("T")[0])}{" "}
          {order.orderDate.split("T")[1].slice(0, 8)}
        </p>
      </div>

      <StateList
        status={order.status ?? ""}
        orderDate={order.orderDate ?? ""}
        deliveryDate={order.deliveryDate ?? ""}
        receiveTime={order.receiveTime ?? ""}
      />

      <div className="order-detail__info item">
        <h5>Th??ng tin ????n h??ng</h5>
        <div className="box">
          <h3>Kh??ch h??ng: {getNameByCusId(order.customerId)}</h3>
          <p>?????a ch??? nh???n h??ng: {order.deliveryAddress}</p>
          <span>S??T: {getPhoneByCusId(order.customerId)}</span>
        </div>
      </div>

      <div className="order-detail__pay item">
        <h5>H??nh th???c thanh to??n</h5>
        <div className="box">
          {order.paymentMethod === "ZaloPay" ? (
            <div className="pay">
              <div className="icon">
                <img src="/images/check-icon.svg" alt="" />
              </div>
              <p>???? thanh to??n</p>
            </div>
          ) : (
            <div className="pay">
              <div className="iconUnPay">
                <img src="/images/wait-icon.svg" alt="" />
              </div>
              <p className="unpay">Ch??a thanh to??n</p>
            </div>
          )}
          <p>
            {order.paymentMethod === "cash" ? "Ti???n m???t" : order.paymentMethod}
          </p>
        </div>
      </div>

      <div className="order-detail__product item">
        <h5>Danh s??ch s???n ph???m</h5>
        {order.itemList.length === 0 ? (
          <h2>C?? ????n m?? kh??ng c?? s???n ph???m ????</h2>
        ) : (
          order.itemList.map((item, index) => {
            return (
              <div className="box" key={index}>
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="info">
                  <div className="">
                    <p>{item.name}</p>
                    <span>{formatToVND(item.subTotal)}</span>
                  </div>
                  <span>{formatToVND(item.price)} ??/ c??i</span>
                  <span>S??? l?????ng: {item.quantity} c??i</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="order-detail__price">
        <div className="box">
          <div className="item">
            <span>????n gi??</span>
            <span>{formatToVND(order.totalPrice)}</span>
          </div>
          <div className="item">
            <span>Gi???m gi??</span>
            <span>{formatToVND(0)}</span>
          </div>
          <div className="item">
            <span>
              <strong>Kh??ch h??ng ph???i tr???</strong>
            </span>
            <span>{formatToVND(order.totalPrice)}</span>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "15px 0",
          margin: "auto",
          marginLeft: "20%",
        }}
      >
        <Button
          style={{
            backgroundColor: "#D83A3A",
            width: "14rem",
            borderRadius: "20px",
          }}
          variant="contained"
          onClick={() => handleChangeStatus(order)}
        >
          X??c nh???n
        </Button>
      </div>
    </div>
  );
}

export default OrderDetail;
