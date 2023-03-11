import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Home2, Note, Book, ProfileCircle } from "iconsax-react";
import { useNavigate } from "react-router-dom";
export default function AppNavigation() {
  const [value, setValue] = useState("home");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "red",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Trang chủ"
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
