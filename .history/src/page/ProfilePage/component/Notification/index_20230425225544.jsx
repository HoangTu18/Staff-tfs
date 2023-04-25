import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
function Notification(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h1>Thông báo</h1>
      </div>
      <div>
        <span>sas</span>
      </div>
    </div>
  );
}

export default Notification;
