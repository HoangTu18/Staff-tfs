import { faCircleExclamation, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rotate90DegreesCcw } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
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
          <hr className="spa ce-hr" />
          <div className="right">
            <h3 className="price">Số sản phẩm</h3>
            <h3 className="order-customer">0.00 VND</h3>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CreateOrder;
