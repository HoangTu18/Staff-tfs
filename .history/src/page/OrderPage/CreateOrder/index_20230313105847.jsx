import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Box from "@mui/material/Box";
import React from "react";
import { useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./index.css";

const CreateOrder = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        paddingBottom: "50px",
      }}
    >
      <div className="order-page">
        <div className="order-title">
          <div className="order-title-detail">
            <img
              src="/images/back-icon.svg"
              alt=""
              onClick={() => {
                navigate("/order");
              }}
            />
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
        <div className="order-item">
          <div className="left" style={{ display: "flex" }}>
            <img src="/images/avt.jpg" alt="" style={{ width: "50px" }} />
            <div>
              <h3>Hoàng Tú</h3>
              <p>Hoàng Tú - 1 cái</p>
            </div>
          </div>
          <div className="right" style={{ alignItems: "end" }}>
            <p>1.000.000 VND</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RemoveIcon style={{ fontSize: "14px", marginTop: "3px" }} />
              <p
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  fontSize: "15px",
                }}
              >
                1
              </p>
              <AddIcon style={{ fontSize: "14px" }} />
            </div>
          </div>
        </div>
        <div className="create-order">
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(136,136,136,0.5",
              marginTop: "150px",
              width: "350px",
              height: "130px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "rgba(251, 251, 251, 0.95",
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
              }}
            >
              <div className="left">
                <p style={{ fontWeight: "bold" }}> Tạm Tính</p>
              </div>
              <div className="rigth" style={{ color: "#D83A3A" }}>
                0.00 VND
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "20px",
              }}
            >
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
                Tạo đơn hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CreateOrder;
