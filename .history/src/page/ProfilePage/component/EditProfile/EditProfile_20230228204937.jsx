import React from "react";
import CakeIcon from "@mui/icons-material/Cake";
import EditIcon from "@mui/icons-material/Edit";
import MailIcon from "@mui/icons-material/Mail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
const EditProfile = () => {
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

      {/* <Box style={{ marginBottom: "10px", fontSize: "18px" }}>
        <span style={{ fontWeight: "bold" }}>Họ và tên</span>
      </Box> */}
      {/* <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>0799966079</Box>
        </Stack>
        <EditIcon />
      </Stack> */}
      <Stack flexDirection="row" style={{ width: "100%" }}>
        <TextField
          sx={{ margin: "auto", marginLeft: "10px" }}
          id="outlined-multiline-flexible"
          label="Họ và tên"
          multiline
          maxRows={4}
        />
      </Stack>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <MailIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>
            phoangtu2000@gmail.com
          </Box>
        </Stack>
        <EditIcon />
      </Stack>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <CakeIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>01/08/2000</Box>
        </Stack>
        <EditIcon />
      </Stack>
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
