import Box from "@mui/material/Box";
import "./index.css";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
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
      <Stack
        flexDirection="row"
        style={styles.optionStyle}
        onClick={() => {
          navigate("/profiledetail");
        }}
      >
        <Stack flexDirection="row">
          <AccountCircleRoundedIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>H??? s??</Box>
        </Stack>
        <ChevronRightRoundedIcon />
      </Stack>
      <Stack
        flexDirection="row"
        style={styles.optionStyle}
        onClick={() => {
          navigate("/setting");
        }}
      >
        <Stack flexDirection="row">
          <SettingsIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>C??i ?????t</Box>
        </Stack>
        <ChevronRightRoundedIcon />
      </Stack>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <NotificationsActiveRoundedIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>Th??ng b??o</Box>
        </Stack>
        <ChevronRightRoundedIcon />
      </Stack>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <InfoRoundedIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>V??? ???ng d???ng</Box>
        </Stack>
        <ChevronRightRoundedIcon style={styles.icons} />
      </Stack>
      <Stack flexDirection="row" style={styles.optionStyle}>
        <Stack flexDirection="row">
          <ExitToAppRoundedIcon style={styles.icons} />
          <Box sx={{ margin: "auto", marginLeft: "10px" }}>????ng xu???t</Box>
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
export default ProfilePage;
