import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Box from "@mui/material/Box";
import { flexbox } from "@mui/system";
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
          <span style={{ color: "#D83A3A", fontWeight: "bold" }}>
            Chọn phương thức thanh toán
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <div className="left">
            <h3 className="orderID">Danh sách sản phẩm</h3>
          </div>
          <div className="right">
            <button
              className="btn btn-danger"
              style={{
                backgroundColor: "#D83A3A",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0px 4px 4px rgba(0,0,0,0.25))",
              }}
            >
              Thêm sản phẩm
            </button>
          </div>
        </div>
        <div className="create-order">
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(136,136,136,0.5",
              marginTop: "110px",
              width: "350px",
              height: "180px",
            }}
          >
            <div className="left">Tạm Tính</div>
            <div className="rigth">0.00 VND</div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CreateOrder;
