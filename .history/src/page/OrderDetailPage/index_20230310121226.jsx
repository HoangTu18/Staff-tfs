import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import StateList from "../../component/ListState";
import Button from "@mui/material/Button";
import "./index.scss";
function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const backToOrderPage = () => {
    navigate("/order");
  };

  return (
    <div className="order-detail">
      <div className="order-detail__title">
        <img src="/images/back-icon.svg" alt="" onClick={backToOrderPage} />
        <h2>Đơn hàng {id}</h2>
      </div>

      <div className="order-detail__time">
        <p>Ngày đặt đơn hàng: 19-02-2023 21:08</p>
      </div>

      <StateList />

      <div className="order-detail__info item">
        <h5>Thông tin đơn hàng</h5>

        <div className="box">
          <h3>Khách hàng: Nguyễn Đình Long</h3>
          <p>Địa chỉ nhận hàng: 157 đường 265, TP.Thủ Đức</p>
          <span>SĐT: 01234556783</span>

          <hr />

          <p>Nhân viên bán hàng: Trần Trọng Hiếu</p>

          <span>
            Tại chi nhánh: 675 D.CMT8, Phường 15, Quận 10, Thành phố Hồ Chí
            Minh, Việt Nam
          </span>
        </div>
      </div>

      <div className="order-detail__pay item">
        <h5>Hình thức thanh toán</h5>
        <div className="box">
          <div className="pay">
            <div className="icon">
              <img src="/images/check-icon.svg" alt="" />
            </div>
            <p>Đã thanh toán</p>
          </div>
          <p>ZaloPay</p>
        </div>
      </div>

      <div className="order-detail__product item">
        <h5>Danh sách sản phẩm</h5>
        <div className="box">
          <div className="image">
            <img src="/images/product1.png" alt="" />
          </div>
          <div className="info">
            <div className="">
              <p>Gà rán KFC</p>
              <span>25.000</span>
            </div>
            <span>25.000 đ/ cái</span>
            <span>Số lượng: 2 cái</span>
          </div>
        </div>
      </div>

      <div className="order-detail__price">
        <div className="box">
          <div className="item">
            <span>Đơn giá</span>
            <span>50.000</span>
          </div>
          <div className="item">
            <span>Giảm giá</span>
            <span>0.00</span>
          </div>
          <div className="item">
            <span>
              <strong>Khách hàng phải trả</strong>
            </span>
            <span>50.000</span>
          </div>
        </div>
      </div>
      <div
        style={{
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
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
}

export default OrderDetail;
