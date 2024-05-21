import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../store";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userCredentials) => {
    const response = await axios.post(
      `${server}/api/v1/users/login`,
      userCredentials
    );
    console.log(response.data.data);
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.error.message.includes("401")) {
          state.error = "Invalid email or password";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
