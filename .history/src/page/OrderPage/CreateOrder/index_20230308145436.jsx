import React from "react";
import "./index.css";
const CreateOrder = () => {
  return (
    <div className="order-title">
      <div className="order-title">
        <ArrowBackIcon />
        <h2>Đơn đặt hàng</h2>
      </div>
      <FontAwesomeIcon
        icon={faPlus}
        style={{}}
        onClick={() => {
          navigate("/createorder");
        }}
      />
    </div>
  );
};

export default CreateOrder;
