import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
const Profile = () => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Stack style={styles.avatarContainer} direction="row" spacing={2}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Box
              onClick={() => {
                console.log("check");
              }}
            >
              <PhotoCameraRoundedIcon style={styles.badgeStyle} />
            </Box>
          }
        >
          <Avatar
            style={styles.imageStyle}
            alt="Travis Howard"
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/317953489_967353554226465_1873988913127309004_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OP9FMZ3vcw4AX8QXnHO&tn=Tgz8CvSewJvXkLNE&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAig6cnWOqD_Fto87xr1XPQCgWG2IpXF0_tk3Pu4mEPug&oe=640305EC"
          />
        </Badge>
      </Stack>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <AccountCircleRoundedIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>Hồ sơ</Box>
        </Stack>
        <ChevronRightRoundedIcon />
      </Stack>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <SettingsIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>Cài đặt</Box>
        </Stack>
        <ChevronRightRoundedIcon />
      </Stack>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <NotificationsActiveRoundedIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>Thông báo</Box>
        </Stack>
        <ChevronRightRoundedIcon />
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

export default Profile;