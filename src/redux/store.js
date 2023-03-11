import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import loadingReducer from "../component/Loading/LoadingSlice";
import orderReducer from "../page/OrderPage/orderSlice";
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    orderManage: orderReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);
export default store;
