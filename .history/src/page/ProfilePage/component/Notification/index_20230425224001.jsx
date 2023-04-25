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
        <h1>Thông báo</h1>
      </div>
    </div>
  );
}

export default Notification;
