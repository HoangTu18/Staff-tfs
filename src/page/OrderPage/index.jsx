import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderRequest } from "./orderSlice";
const count = 3;
const OrderPage = () => {
  const navigate = useNavigate();
  const goToOrderDetailPage = (id) => {
    navigate(`/order/${id}`);
  };

  const dispatch = useDispatch();
  const listOrder = useSelector((state) => state.orderManage.listOrder);

  useEffect(() => {
    dispatch(getOrderRequest());
  }, []);
  console.log(listOrder);
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <div className="order-page">
        <div className="order-title">
          <div className="order-title-detail" style={{ width: "100%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <img src="/images/back-icon.svg" alt="" />
              <h2> Đơn đặt hàng</h2>
            </div>
            <div style={{ fontSize: "21px" }}>
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => {
                  navigate("/createorder");
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className="order-calender">
          <input type={"date"} className="date" />
        </div> */}
        <h2 className="order-sum">Tổng đơn hàng: {listOrder.length}</h2>
        <div className="order-list">
          {listOrder.length === 0 ? (
            <h2>Hiện không có đơn hàng</h2>
          ) : (
            listOrder.map((item) => (
              <div
                className="order-item"
                onClick={() => {
                  goToOrderDetailPage(item.id);
                }}
              >
                <div className="left">
                  <h3 className="orderID">#{item.id}</h3>
                  <h3 className="order-customer">{item.customerId}</h3>
                  <div className="order-products">
                    {item.totalQuantity} sản phẩm
                  </div>
                </div>
                <div className="right">
                  <h3 className="price">{item.totalPrice}</h3>
                  <div className="confirmnative">
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    <span>{item.status}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Box>
  );
};

export default OrderPage;
