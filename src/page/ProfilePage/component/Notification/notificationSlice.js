import { createSlice } from "@reduxjs/toolkit";

export const notiManageSlice = createSlice({
  name: "notiManageSlice",
  initialState: {
    listNoti: [],
  },
  reducers: {
    getNotificationRequest: (state, action) => {},
    getNotificationSuccess: (state, action) => {
      state.listNoti = action.payload;
    },
    getNotificationFailure: (state) => {
      return state;
    },
  },
});

export const {
  getNotificationRequest,
  getNotificationSuccess,
  getNotificationFailure,
} = notiManageSlice.actions;

export default notiManageSlice.reducer;
