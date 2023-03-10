import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const MenuPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingLeft: "8px",
        paddingRight: "8px",
      }}
    >
      <Box sx={{ textAlign: "center", color: "#d83a3a", marginY: "18px" }}>
        <h2>THỰC ĐƠN</h2>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box sx={styles.contentContainer}>
              <img
                style={styles.image}
                src="https://img.tastykitchen.vn/2022/04/04/com-cha-cua-66f6.jpg"
              />
              <Stack sx={styles.contentInfor}>
                <Box sx={{ fontSize: 18, marginBottom: "4px" }}>
                  Cơm chả cua
                </Box>
                <Stack direction={"row"} sx={{ alignItems: "flex-end" }}>
                  Giá:{" "}
                  <Box
                    sx={{ marginLeft: "10px", fontSize: 16, color: "#d83a3a" }}
                  >
                    49.000 đ
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={styles.contentContainer}>
              <img
                style={styles.image}
                src="https://img.tastykitchen.vn/crop/820x642/2022/03/28/com-dui-ga-bb3e.jpg"
              />
              <Stack sx={styles.contentInfor}>
                <Box sx={{ fontSize: 18, marginBottom: "4px" }}>
                  Cơm chả cua
                </Box>
                <Stack direction={"row"} sx={{ alignItems: "flex-end" }}>
                  Giá:{" "}
                  <Box
                    sx={{ marginLeft: "10px", fontSize: 16, color: "#d83a3a" }}
                  >
                    49.000 đ
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={styles.contentContainer}>
              <img
                style={styles.image}
                src="https://img.tastykitchen.vn/crop/820x642/2022/03/28/com-suon-nuong-afed.jpg"
              />
              <Stack sx={styles.contentInfor}>
                <Box sx={{ fontSize: 18, marginBottom: "4px" }}>
                  Cơm chả cua
                </Box>
                <Stack direction={"row"} sx={{ alignItems: "flex-end" }}>
                  Giá:{" "}
                  <Box
                    sx={{ marginLeft: "10px", fontSize: 16, color: "#d83a3a" }}
                  >
                    49.000 đ
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={styles.contentContainer}>
              <img
                style={styles.image}
                src="https://img.tastykitchen.vn/crop/820x642/2022/03/28/ga-lanh-2782.jpg"
              />
              <Stack sx={styles.contentInfor}>
                <Box sx={{ fontSize: 18, marginBottom: "4px" }}>
                  Cơm chả cua
                </Box>
                <Stack direction={"row"} sx={{ alignItems: "flex-end" }}>
                  Giá:{" "}
                  <Box
                    sx={{ marginLeft: "10px", fontSize: 16, color: "#d83a3a" }}
                  >
                    49.000 đ
                  </Box>
                </Stack>
              </Stack>
              <Stack sx={styles.contentInfor}>
                <Box sx={{ fontSize: 18, marginBottom: "4px" }}>
                  Cơm chả cua
                </Box>
                <Stack direction={"row"} sx={{ alignItems: "flex-end" }}>
                  Giá:{" "}
                  <Box
                    sx={{ marginLeft: "10px", fontSize: 16, color: "#d83a3a" }}
                  >
                    49.000 đ
                  </Box>
                </Stack>
              </Stack>
              <Stack sx={styles.contentInfor}>
                <Box sx={{ fontSize: 18, marginBottom: "4px" }}>
                  Cơm chả cua
                </Box>
                <Stack direction={"row"} sx={{ alignItems: "flex-end" }}>
                  Giá:{" "}
                  <Box
                    sx={{ marginLeft: "10px", fontSize: 16, color: "#d83a3a" }}
                  >
                    49.000 đ
                  </Box>
                </Stack>
              </Stack>
              <Stack sx={styles.contentInfor}>
                <Box sx={{ fontSize: 18, marginBottom: "4px" }}>
                  Cơm chả cua
                </Box>
                <Stack direction={"row"} sx={{ alignItems: "flex-end" }}>
                  Giá:{" "}
                  <Box
                    sx={{ marginLeft: "10px", fontSize: 16, color: "#d83a3a" }}
                  >
                    49.000 đ
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={styles.contentContainer}>
              <img
                style={styles.image}
                src="https://img.tastykitchen.vn/crop/820x642/2022/12/18/com-ca-sapa-kho-1623.jpg"
              />
              <Stack sx={styles.contentInfor}>
                <Box sx={{ fontSize: 18, marginBottom: "4px" }}>
                  Cơm chả cua
                </Box>
                <Stack direction={"row"} sx={{ alignItems: "flex-end" }}>
                  Giá:{" "}
                  <Box
                    sx={{ marginLeft: "10px", fontSize: 16, color: "#d83a3a" }}
                  >
                    49.000 đ
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
const styles = {
  contentContainer: {
    backgroundColor: "#fbfbfb",
    margin: "4px ",
    borderRadius: "15px",
    boxShadow: 1,
  },
  image: {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    display: "block",
    height: "auto",
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentInfor: {
    margin: "10px",
    paddingBottom: "10px",
  },
};
export default MenuPage;
