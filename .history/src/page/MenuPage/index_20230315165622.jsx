import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategoryRequest } from "./categorySlice";
import { formatToVND } from "../../utils/numberUtil";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const MenuPage = () => {
  const dispatch = useDispatch();
  const listCategory = useSelector(
    (state) => state.categoryManage.listCategory
  );
  const [listFood, setListFood] = useState([]);
  useEffect(() => {
    dispatch(getCategoryRequest());
  }, []);

  const handleOnChangeCate = (e) => {
    let eId = e !== 1 ? +e.target.value : 1;
    setListFood([]);
    listCategory.forEach((item) => {
      if (item.id === eId) {
        item.foodList.forEach((food) => {
          setListFood((prev) => [...prev, food]);
        });
      }
    });
  };

  useEffect(() => {
    if (listFood.length === 0) {
      handleOnChangeCate(1);
    }
  }, []);
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
      <select
        style={{
          width: "100%",
          fontSize: "20px",
          margin: "10px 5px",
          color: "black",
        }}
        onChange={handleOnChangeCate}
      >
        {listCategory.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.categoryName}
            </option>
          );
        })}
      </select>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {listFood.map((item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Box sx={styles.contentContainer}>
                  <img style={styles.image} src={item.imgUrl} alt="" />
                  <Stack sx={styles.contentInfor}>
                    <Box
                      sx={{ fontSize: 18, marginBottom: "4px", height: "50px" }}
                    >
                      {item.foodName}
                    </Box>
                    <Stack
                      direction={"row"}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      Giá:
                      <Box
                        sx={{
                          marginLeft: "4px",
                          fontSize: 16,
                          color: "#d83a3a",
                        }}
                      >
                        {formatToVND(item.price)}đ
                      </Box>
                      <div
                        style={{
                          padding: "10px",
                          backgroundColor: "#d83a3a",
                          width: "30px",
                          height: "30px",
                        }}
                      >
                        <AddShoppingCartIcon
                          style={{ marginLeft: "35px", color: "#d83a3a" }}
                        />
                      </div>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            );
          })}
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
    height: "220px",
    position: "relative",
  },
  image: {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    display: "block",
    height: "120px",
    width: "100%",
    objectFit: "cover",
  },
  contentInfor: {
    // fontSize: "10px",
    margin: "10px",
    paddingBottom: "10px",
  },
};
export default MenuPage;
