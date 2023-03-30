import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Home2, Note, Book, ProfileCircle, ShoppingCart } from "iconsax-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AppNavigation() {
  const [value, setValue] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        display:
          location.pathname === "/login" ||
          location.pathname === "/zalopayment" ||
          location.pathname === "/createorder" ||
          location.pathname === "/paymentsuccess" ||
          location.pathname === "/"
            ? "none"
            : "flex",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label={<p style={{ fontSize: "15px" }}>Trang chủ</p>}
        value="home"
        onClick={() => {
          navigate("/home");
        }}
        icon={<Home2 />}
      />
      <BottomNavigationAction
        label="Đơn hàng"
        value="orders"
        onClick={() => {
          navigate("/order");
        }}
        icon={<Note />}
      />
      <BottomNavigationAction
        label="Giỏ Hàng"
        value="createorder"
        onClick={() => {
          navigate("/createorder");
        }}
        icon={<ShoppingCart />}
      />
      <BottomNavigationAction
        label="Thực đơn"
        value="menu"
        onClick={() => {
          navigate("/menu");
        }}
        icon={<Book />}
      />
      <BottomNavigationAction
        label="Cá nhân"
        value="profile"
        onClick={() => {
          navigate("/profile");
        }}
        icon={<ProfileCircle />}
      />
    </BottomNavigation>
  );
}
