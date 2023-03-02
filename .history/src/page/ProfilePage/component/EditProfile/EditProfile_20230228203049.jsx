import React from "react";
import CakeIcon from "@mui/icons-material/Cake";
import EditIcon from "@mui/icons-material/Edit";
import MailIcon from "@mui/icons-material/Mail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const EditProfile = () => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Stack>back</Stack>
      <Stack style={styles.avatarContainer} direction="row" spacing={2}>
        <span> Phạm Hoàng Tú</span>
      </Stack>

      <Box style={{ marginBottom: "10px", fontSize: "18px" }}>Họ và tên</Box>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <PhoneAndroidIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>0799966079</Box>
        </Stack>
        <EditIcon />
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
  },
  icons: {
    color: "#D83A3A",
  },
};

export default EditProfile;
