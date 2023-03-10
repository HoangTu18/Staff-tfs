import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.css";
const ChangePassword = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <div className="order-page">
        <div className="order-title">
          <div
            className="order-title-detail"
            onClick={() => {
              navigate("/setting");
            }}
          >
            <img src="/images/back-icon.svg" alt="" />
            <h2>Đổi mật khẩu</h2>
          </div>
        </div>

        <Stack flexDirection="row" style={styles.optionStyle}>
          <Stack flexDirection="row">
            <Box sx={{ margin: "auto", marginLeft: "10px" }}>Mật khẩu cũ</Box>
          </Stack>
          <LockIcon style={styles.icons} />
        </Stack>

        <Stack flexDirection="row" style={styles.optionStyle}>
          <Stack flexDirection="row">
            <Box sx={{ margin: "auto", marginLeft: "10px" }}>Mật khẩu mới</Box>
          </Stack>
          <LockIcon style={styles.icons} />
        </Stack>

        <Stack flexDirection="row" style={styles.optionStyle}>
          <Stack flexDirection="row">
            <Box sx={{ margin: "auto", marginLeft: "10px" }}>
              Nhập lại mật khẩu mới
            </Box>
          </Stack>
          <LockIcon style={styles.icons} />
        </Stack>
        <Box
          sx={{ margin: "auto", marginLeft: "20%" }}
          onClick={() => {
            navigate("/success");
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
        </Box>
      </div>
    </Box>
  );
};
const styles = {
  avatarContainer: {
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
    fontSize: 26,
  },
  imageStyle: {
    display: "block",
    width: 90,
    height: 90,
  },
  badgeStyle: {
    border: "2px solid transparent",
    backgroundColor: "#f0f0f0",
    borderRadius: "100px",
    padding: "2px",
    height: 30,
    width: 30,
    color: "gray",
  },
  optionStyle: {
    justifyContent: "space-between",
    backgroundColor: "#eeeeee",
    padding: 16,
    borderRadius: 15,
    fontSize: "16px",
    marginBottom: "30px",
  },
  icons: {
    color: "#D83A3A",
  },
};

export default ChangePassword;
