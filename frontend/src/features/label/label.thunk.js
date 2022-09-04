import { createAsyncThunk } from "@reduxjs/toolkit";
import labelApi from "./label.api";

//라벨 생성
export const createLabel = createAsyncThunk(
  "labels/create",
  async (labelData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await labelApi.createLabel(labelData, token);
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

//라벨 전부 가져오기
export const getLabels = createAsyncThunk(
  "labels/getLabels",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await labelApi.getLabels(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState, extra }) => {
      const { label } = getState();
      const fetchError = label.isError;
      if (fetchError) {
        return false;
      }
    },
  }
);

//라벨 삭제하기
export const deleteLabel = createAsyncThunk(
  "labels/delete",
  async (labelId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await labelApi.deleteLabel(labelId, token);
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

//라벨 수정하기
export const updateLabel = createAsyncThunk(
  "memos/update",
  async ({ labelId, labelData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await labelApi.updateLabel(labelId, labelData, token);
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
