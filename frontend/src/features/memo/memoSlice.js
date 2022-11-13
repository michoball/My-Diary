import { createSlice } from "@reduxjs/toolkit";
import {
  createMemos,
  deleteMemo,
  getMemos,
  updateMemo,
  getMemo,
} from "./memo.thunk";

const initialState = {
  memoLists: [],
  selectedMemo: null,
  isLoading: false,
  isError: false,
  message: "",
};

export const MemoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    setSelectMemo: (state, action) => {
      const findedMemo = state.memoLists.find(
        (list) => list._id === action.payload
      );
      return {
        ...state,
        selectedMemo: findedMemo,
      };
    },
    clearSelectMemo: (state) => {
      return {
        ...state,
        selectedMemo: null,
      };
    },
    memoReset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMemos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMemos.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createMemos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getMemos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMemos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.memoLists = action.payload;
      })
      .addCase(getMemos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getMemo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMemo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedMemo = action.payload;
      })
      .addCase(getMemo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteMemo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMemo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.memoLists = state.memoLists.filter(
          (memo) => memo._id !== action.payload.id
        );
      })
      .addCase(deleteMemo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateMemo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMemo.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateMemo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { setSelectMemo, clearSelectMemo, memoReset } = MemoSlice.actions;

export default MemoSlice.reducer;
