import { configureStore } from "@reduxjs/toolkit";

export const server = import.meta.env.SERVER_URL;
console.log(server);

export const store = configureStore({
  reducer: {},
});
