import { createSelector } from "reselect";

const selectMemoListsReducer = (state) => state.memo;

export const selectMemoLists = createSelector(
  [selectMemoListsReducer],
  (selectMemoListsSlice) => {
    return selectMemoListsSlice.memoLists;
  }
);
export const selectMemoLoading = createSelector(
  [selectMemoListsReducer],
  (selectMemoIsLoadingSlice) => {
    return selectMemoIsLoadingSlice.isLoading;
  }
);

export const selectRecentOrderMemoLists = createSelector(
  [selectMemoLists],
  (memoListsSlice) => {
    const copyList = [...memoListsSlice];
    return copyList.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
);

export const selectMemo = createSelector(
  [selectMemoListsReducer],
  (selectMemoListsSlice) => {
    return selectMemoListsSlice.selectedMemo;
  }
);

export const selectMajorMemos = createSelector(
  [selectMemoLists],
  (memoListsSlice) => {
    return memoListsSlice.filter((memo) => memo.major === true);
  }
);

export const selectColorValue = createSelector(
  [selectMemoLists],
  (memoListSlice) => {
    let memosColorSlice = new Set();
    for (let i = 0; i < memoListSlice.length; i++) {
      if (!memosColorSlice.has(memoListSlice[i].color)) {
        memosColorSlice.add(memoListSlice[i].color);
      }
    }
    return [...memosColorSlice];
  }
);
