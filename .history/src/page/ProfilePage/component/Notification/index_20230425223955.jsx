import React from "react";
import { useNavigate } from "react-router-dom";
function Notification(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/notification");
      }}
    >
      <div style={{ backgroundColor: "red" }}>
        <p>Thông báo</p>
      </div>
    </div>
  );
}

export default Notification;
