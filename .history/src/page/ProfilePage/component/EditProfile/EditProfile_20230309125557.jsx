import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Stack>
        <Box style={{ marginBottom: "10px", fontSize: "18px" }}>
          <ArrowBackIcon />
          <span style={{ marginBottom: "5px" }}>Hồ sơ</span>
        </Box>
      </Stack>
      <Stack style={styles.avatarContainer} direction="row" spacing={2}>
        <span style={{ fontWeight: "bold" }}> Phạm Hoàng Tú</span>
      </Stack>

      <Box style={{ marginBottom: "10px", fontSize: "18px" }}>
        <span style={{ fontWeight: "bold" }}>Họ và tên</span>
      </Box>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>
            {" "}
            <input
              value="Phạm Hoàng Túaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
              style={{ border: "none", fontSize: "16px", width: "10px" }}
            />
          </Box>
        </Stack>
      </Stack>

      <Box style={{ marginBottom: "10px", fontSize: "18px" }}>
        <span style={{ fontWeight: "bold" }}>Email</span>
      </Box>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>
            phoangtu2000@gmail.com
          </Box>
        </Stack>
      </Stack>

      <Box style={{ marginBottom: "10px", fontSize: "18px" }}>
        <span style={{ fontWeight: "bold" }}>Số điện thoại</span>
      </Box>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>0799966079</Box>
        </Stack>
      </Stack>

      <Box style={{ marginBottom: "10px", fontSize: "18px" }}>
        <span style={{ fontWeight: "bold" }}>Ngày Sinh</span>
      </Box>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>01/08/2000</Box>
        </Stack>
      </Stack>
      <Box sx={{ margin: "auto", marginLeft: "20%" }}>
        <Button
          style={{
            backgroundColor: "#D83A3A",
            width: "14rem",
            borderRadius: "20px",
          }}
          variant="contained"
          onClick={() => {
            navigate("/success");
          }}
        >
          Xác nhận
        </Button>
      </Box>
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
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  icons: {
    color: "#D83A3A",
  },
};

export default EditProfile;
