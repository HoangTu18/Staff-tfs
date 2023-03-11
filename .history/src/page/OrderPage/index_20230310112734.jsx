import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";
const count = 3;
const OrderPage = () => {
  const navigate = useNavigate();
  const goToOrderDetailPage = (id) => {
    navigate(`/order/${id}`);
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
            <div>
              <img src="/images/back-icon.svg" alt="" />
              <h2> Đơn đặt hàng</h2>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPlus}
                style={{ display: "flex", justifyContent: "end" }}
                onClick={() => {
                  navigate("/createorder");
                }}
              />
            </div>
          </div>
        </div>
        <div className="order-calender">
          <input type={"date"} className="date" />
        </div>
        <h2 className="order-sum">Tổng đơn hàng: {count}</h2>
        <div className="order-list">
          <div
            className="order-item"
            onClick={() => {
              goToOrderDetailPage(17);
            }}
          >
            <div className="left">
              <h3 className="orderID">#17</h3>
              <h3 className="order-customer">Phạm Hoàng Tú</h3>
              <div className="order-products">{count} sản phẩm</div>
            </div>
            <div className="right">
              <h3 className="price">400.000 VND</h3>
              <div className="confirmnative">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <span>Chờ xác nhận</span>
              </div>
            </div>
          </div>
          <div
            className="order-item"
            onClick={() => {
              goToOrderDetailPage(17);
            }}
          >
            <div className="left">
              <h3 className="orderID">#17</h3>
              <h3 className="order-customer">Phạm Hoàng Tú</h3>
              <div className="order-products">{count} sản phẩm</div>
            </div>
            <div className="right">
              <h3 className="price">400.000 VND</h3>
              <div className="confirmnative">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <span>Chờ xác nhận</span>
              </div>
            </div>
          </div>
          <div
            className="order-item"
            onClick={() => {
              goToOrderDetailPage(17);
            }}
          >
            <div className="left">
              <h3 className="orderID">#17</h3>
              <h3 className="order-customer">Phạm Hoàng Tú</h3>
              <div className="order-products">{count} sản phẩm</div>
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

export default OrderPage;
