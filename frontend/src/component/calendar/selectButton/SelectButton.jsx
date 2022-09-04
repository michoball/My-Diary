import { useDispatch, useSelector } from "react-redux";
import { selectLabelLists } from "../../../features/label/label.select";
import { selectLabel } from "../../../features/label/labelSlice";
import { SelectContainer } from "./SelectButton.styles";
import SelectOption from "../selectOption/SelectOption";

function SelectButton() {
  const listOfLabels = useSelector(selectLabelLists);
  const dispatch = useDispatch();

  const labelChangeHandler = (e) => {
    const selectLabelId = e.target.value;
    console.log(selectLabelId);
    dispatch(selectLabel(selectLabelId));
  };

  return (
    <SelectContainer>
      <label>Label</label>
      <select onChange={labelChangeHandler}>
        <option value="">--label option--</option>
        {listOfLabels.map((label) => {
          return <SelectOption key={label._id} label={label} />;
        })}
      </select>
    </SelectContainer>
  );
}

export default SelectButton;
