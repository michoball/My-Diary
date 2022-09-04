import { createMemos, updateMemo } from "./memo.thunk";

const lookupMemo = (lists, id) => {
  return lists.find((list) => list._id === id);
};

// add, remove => set memo
export const addMemo = (memoLists, newMemoData) => {
  const findMemo = lookupMemo(memoLists, newMemoData._id);

  if (findMemo) {
    return updateMemo({ memoId: findMemo._id, memoData: newMemoData });
  } else {
    return createMemos(newMemoData);
  }
};
