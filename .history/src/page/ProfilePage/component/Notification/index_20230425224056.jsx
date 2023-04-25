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
        <h1>Thông báo</h1>0
      </div>
      <div>
        <span>sas</span>
      </div>
    </div>
  );
}

export default Notification;
