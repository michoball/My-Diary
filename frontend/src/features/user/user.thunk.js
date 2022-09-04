import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./user.api";

// Register new user
export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      return await userApi.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login user
export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    return await userApi.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// google login user
export const oauthLogin = createAsyncThunk(
  "user/oauthLogin",
  async (_, thunkAPI) => {
    try {
      return await userApi.oauthLogin();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Logout user
export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  // const accessToken = thunkAPI.getState().user.user.accessToken;
  try {
    return await userApi.logout();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});
