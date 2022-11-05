import { createSlice } from "@reduxjs/toolkit";
import {
  createLabel,
  getLabels,
  deleteLabel,
  updateLabel,
} from "./label.thunk";

const initialState = {
  labelLists: [],
  selectedLabel: null,
  isLoading: false,
  isError: false,
  message: "",
};

export const labelSlice = createSlice({
  name: "label",
  initialState,
  reducers: {
    labelReset: (state) => initialState,
    clearSelectLabel: (state) => {
      return {
        ...state,
        selectedLabel: null,
      };
    },
    selectLabel: (state, action) => {
      const existingLabel = state.labelLists.find(
        (label) => label._id === action.payload
      );
      return {
        ...state,
        selectedLabel: existingLabel,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLabel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.labelLists = state.labelLists.concat(action.payload);
      })
      .addCase(createLabel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getLabels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLabels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.labelLists = action.payload;
      })
      .addCase(getLabels.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;

        state.message = action.payload;
      })
      .addCase(deleteLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLabel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.labelLists = state.labelLists.filter(
          (label) => label._id !== action.payload.labelId
        );
      })
      .addCase(deleteLabel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLabel.fulfilled, (state, action) => {
        state.isLoading = false;

        state.labelLists = state.labelLists.map((label) =>
          label._id === action.payload._id
            ? { ...label, ...action.payload }
            : label
        );
      })
      .addCase(updateLabel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearSelectLabel, selectLabel, labelReset } = labelSlice.actions;

export default labelSlice.reducer;
