import { faCircleExclamation, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <input type={"date"} className="date" />
        </div>
        <h2 className="order-sum">Tổng đơn hàng: </h2>
        <div className="order-list">
          <div className="order-item">
            <div className="left">
              <h3 className="orderID">#17</h3>
              <h3 className="order-customer">Phạm Hoàng Tú</h3>
              <div className="order-products"> sản phẩm</div>
            </div>
            <div className="right">
              <h3 className="price">400.000 VND</h3>
              <div className="confirmnative">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <span>Chờ xác nhận</span>
              </div>
            </div>
          </div>
          <div className="order-item">
            <div className="left">
              <h3 className="orderID">#17</h3>
              <h3 className="order-customer">Phạm Hoàng Tú</h3>
              <div className="order-products"> sản phẩm</div>
            </div>
            <div className="right">
              <h3 className="price">400.000 VND</h3>
              <div className="confirmnative">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <span>Chờ xác nhận</span>
              </div>
            </div>
          </div>
          <div className="order-item">
            <div className="left">
              <h3 className="orderID">#17</h3>
              <h3 className="order-customer">Phạm Hoàng Tú</h3>
              <div className="order-products"> sản phẩm</div>
            </div>
            <div className="right">
              <h3 className="price">400.000 VND</h3>
              <div className="confirmnative">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <span>Chờ xác nhận</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CreateOrder;
