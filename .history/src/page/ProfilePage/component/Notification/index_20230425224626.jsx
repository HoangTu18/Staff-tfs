import React from "react";
import { useNavigate } from "react-router-dom";
function Notification(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ backgroundColor: "red", width: "50px" }}>
        <h1>Thông báo</h1>0
      </div>
      <div>
        <span>sas</span>
      </div>
    </div>
  );
}

export default Notification;
