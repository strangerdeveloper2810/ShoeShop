import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducer/ProductReducer/ProductReducer";
import LoadingReducer from "./reducer/LoadingReducer/LoadingReducer";
import UserReducer from "./reducer/UserReducer/UserReducer";
export const store = configureStore({
  reducer: {
    productReducer: ProductReducer,
    loadingReducer: LoadingReducer,
    userReducer: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
