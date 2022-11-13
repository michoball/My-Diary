import { createAsyncThunk } from "@reduxjs/toolkit";
import memoApi from "./memo.api";

//메모 생성
export const createMemos = createAsyncThunk(
  "memos/create",
  async (memoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await memoApi.createMemos(memoData, token);
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

//메모 전부 가져오기
export const getMemos = createAsyncThunk(
  "memos/getMemos",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await memoApi.getMemos(token);
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
      const { memo } = getState();
      const fetchError = memo.isError;
      if (fetchError) {
        return false;
      }
    },
  }
);

//메모 하나 가져오기
export const getMemo = createAsyncThunk(
  "memos/getMemo",
  async (memoId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await memoApi.getMemo(memoId, token);
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
      const { memo } = getState();
      const fetchError = memo.isError;
      if (fetchError) {
        return false;
      }
    },
  }
);

//메모 삭제하기
export const deleteMemo = createAsyncThunk(
  "memos/delete",
  async (memoId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await memoApi.deleteMemo(memoId, token);
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

//메모 수정하기

export const updateMemo = createAsyncThunk(
  "memos/update",
  async ({ memoId, memoData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await memoApi.updateMemo(memoId, memoData, token);
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
