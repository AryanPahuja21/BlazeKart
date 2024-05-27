import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";

export const server = import.meta.env.VITE_SERVER_URL;

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
