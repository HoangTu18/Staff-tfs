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
      <div>Thông báo</div>
    </div>
  );
}

export default Notification;
