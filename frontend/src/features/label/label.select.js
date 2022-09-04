import { createSelector } from "reselect";

export const selectLabelsReducer = (state) => state.label;

export const selectLabelLists = createSelector(
  [selectLabelsReducer],
  (selectlabelListsSlice) => {
    return selectlabelListsSlice.labelLists;
  }
);

export const selectSelectedLabel = createSelector(
  [selectLabelsReducer],
  (selectlabelListsSlice) => {
    return selectlabelListsSlice.selectedLabel;
  }
);

export const selectlabelIsLoading = createSelector(
  [selectLabelsReducer],
  (selectlabelLoadingSlice) => {
    return selectlabelLoadingSlice.isLoading;
  }
);
