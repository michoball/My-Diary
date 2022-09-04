import { createLabel, updateLabel } from "./label.thunk";

const lookupLabel = (labels, id) => {
  return labels.find((label) => label._id === id);
};

export const addLabel = (labelLists, newLabelData) => {
  const existingLabel = lookupLabel(labelLists, newLabelData._id);
  if (existingLabel) {
    return updateLabel({ labelId: existingLabel._id, labelData: newLabelData });
  }
  return createLabel(newLabelData);
};
