import { createSlice } from "@reduxjs/toolkit";

export const orderManageSlice = createSlice({
  name: "orderManageSlice",
  initialState: {
    listOrder: [],
  },
  reducers: {
    getOrderRequest: (state) => {
      return state;
    },
    getOrderSuccess: (state, action) => {
      state.listOrder = action.payload;
      state.isLoading = false;
    },
    getOrderFailure: (state) => {
      return state;
    },
  },
});

export const { getOrderRequest, getOrderSuccess, getOrderFailure } =
  orderManageSlice.actions;

export default orderManageSlice.reducer;
