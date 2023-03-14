import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListCustomerRequest, getOrderRequest } from "./orderSlice";
import { ORDER } from "../../utils/constant";
const OrderPage = () => {
  const navigate = useNavigate();
  const goToOrderDetailPage = (data) => {
    localStorage.setItem(ORDER, JSON.stringify(data));
    navigate(`/order/${data.id}`);
  };
  const dispatch = useDispatch();
  const listOrder = useSelector((state) => state.orderManage.listOrder);
  const listCustomer = useSelector((state) => state.orderManage.listCustomer);

  useEffect(() => {
    dispatch(getOrderRequest(8));
    dispatch(getListCustomerRequest());
  }, [dispatch]);

  const getNameByCusId = (id) => {
    let data = listCustomer.find((item) => item.customerId === +id);
    if (data !== undefined) {
      return data.customerName ?? "";
    }
    return "";
  };

  const explanStatus = (status) => {
    switch (status) {
      case "pending":
        return "Chờ nhận đơn";
      case "accept":
        return "Chờ xác nhận";
      case "delivery":
        return "Đang giao hàng";
      case "done":
        return "Đã nhận hàng";
      case "deny":
        return "Huỷ đơn";
      default:
        break;
    }
  };

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
              {/* <img src="/images/back-icon.svg" alt="" /> */}
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
            listOrder.map((item, index) => (
              <div
                key={index}
                className="order-item"
                onClick={() => {
                  goToOrderDetailPage(item);
                }}
              >
                <div className="left">
                  <h3 className="orderID">#{item.id}</h3>
                  <h3 className="order-customer">
                    {getNameByCusId(item.customerId)}
                  </h3>
                  <div className="order-products">
                    {item.totalQuantity} sản phẩm
                  </div>
                </div>
                <div className="right">
                  <h3 className="price">{item.totalPrice}</h3>
                  <div className="confirmnative">
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    <span>{explanStatus(item.status)}</span>
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
