import { faCircleExclamation, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rotate90DegreesCcw } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import React from "react";
import "./index.css";

const CreateOrder = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <div className="order-page">
        <div className="order-title">
          <div className="order-title">
            <ArrowBackIcon />
            <h2>Tạo đơn hàng</h2>
          </div>
        </div>
        <div className="order-calender">
          <p className="date">Ngày tạo đơn: 19-02-2023</p>
        </div>
        <div className="order-item">
          <div className="left">
            <h3 className="orderID">Tổng tiền</h3>
            <h3 className="order-customer">0.00 VND</h3>
          </div>
          <hr className="space-hr" />
          <div className="right">
            <h3 className="price">Số sản phẩm</h3>
            <h3 className="order-customer">0.00 VND</h3>
          </div>
        </div>
        <div className="order-calender">
          <p className="date">Khách hàng</p>
        </div>
        <div className="order-item">
          <PhoneAndroidIcon className="icon" />
          <input className="phonenumber-customer" placeholder="Số điện thoại" />
        </div>
        <div className="order-calender">
          <p className="date">Phương thức thanh toán</p>
        </div>
        <div className="order-item">
          <span>Chọn phương thức thanh toán</span>
        </div>
      </div>
    </Box>
  );
};

export default CreateOrder;
