import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ChangePasswordSuccess = () => {
  return (
    <Box>
      <Box sx={{ margin: "auto", marginLeft: "50%", fontSize: "24rem" }}>
        <CheckCircleIcon style={{ color: "#3ADA14" }} />
      </Box>
      <Box sx={{ margin: "auto", marginLeft: "20%" }}>
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
    </Box>
  );
};

export default ChangePasswordSuccess;
