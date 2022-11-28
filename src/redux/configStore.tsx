import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducer/ProductReducer/ProductReducer";
export const store = configureStore({
  reducer: {
    productReducer: ProductReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;