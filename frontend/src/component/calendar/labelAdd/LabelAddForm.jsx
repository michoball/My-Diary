import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../../UI/formInput/FormInput";

import ColorPicker from "../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../UI/toggleSwitch/ToggleSwitch";

import {
  LabelInputcontainer,
  ColorSection,
  AddBtn,
  LabelInputForm,
  AllDayBtn,
  BtnContainer,
} from "./LabelAddForm.styles";

import { Check2Circle, X } from "react-bootstrap-icons";
import Button, { BUTTON_TYPE_CLASSES } from "../../../UI/button/button";

import Modal from "../../modal/Modal";
import { addLabel } from "../../../features/label/label.action";
import {
  selectLabelLists,
  selectLabelsReducer,
} from "../../../features/label/label.select";

const defaultLabel = {
  labelTitle: "",
  color: "#f44336",
  allDay: false,
};
const abvancedLabel = {
  daysOfWeek: ["0"],
};

const LabelAddForm = ({ onConfirm }) => {
  const labelLists = useSelector(selectLabelLists);
  const { isError, message } = useSelector(selectLabelsReducer);
  const [newLabel, setNewLabel] = useState(defaultLabel);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const dispatch = useDispatch();

  const { labelTitle, color, allDay } = newLabel;

  useEffect(() => {
    if (isError) {
      alert(message);
    }
  }, [isError, message]);

  const inputChangeHandler = (e) => {
    setNewLabel((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const allDayChangeHandler = (isAllDay) => {
    setNewLabel((prev) => {
      return { ...prev, allDay: isAllDay };
    });
  };
  const colorChangeHandler = (color) => {
    setNewLabel((prev) => {
      return { ...prev, color: color };
    });
  };

  const recurrLabelChangeHandler = (recurr) => {
    setIsAdvanced(recurr);
  };

  const defaultSetting = () => {
    setNewLabel(defaultLabel);
    onConfirm();
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (labelTitle === "") {
      return alert("라벨명을 입력하시오");
    } else if (labelTitle.length > 10) {
      return alert("라벨명은 100자 이하여야 합니다.");
    }
    const finalLabel = isAdvanced
      ? { ...newLabel, ...abvancedLabel }
      : newLabel;

    dispatch(addLabel(labelLists, finalLabel));

    defaultSetting();
  };

  return (
    <Modal
      onClick={defaultSetting}
      toggleModal={() => {
        onConfirm();
      }}
    >
      <Button
        buttonType={BUTTON_TYPE_CLASSES.cancel}
        type="click"
        onClick={() => onConfirm()}
      >
        <X />
      </Button>
      <LabelInputcontainer>
        <LabelInputForm onSubmit={submitHanbler}>
          <FormInput
            label="라벨명"
            type="text"
            name="labelTitle"
            value={labelTitle}
            className="labelTitle"
            onChange={inputChangeHandler}
          />

          <AllDayBtn>
            <ToggleSwitch
              type="allDay"
              title="종일"
              onSwitchEvent={allDayChangeHandler}
              toggleValue={allDay}
            />
            <ToggleSwitch
              type="recurr"
              title="정기 일정"
              onSwitchEvent={recurrLabelChangeHandler}
              toggleValue={isAdvanced}
            />
          </AllDayBtn>

          <ColorSection>
            <label>Color</label>
            <ColorPicker
              colorSelected={color}
              onColorPick={colorChangeHandler}
            />
          </ColorSection>
          <BtnContainer>
            <AddBtn type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
              <Check2Circle />
              Add
            </AddBtn>
          </BtnContainer>
        </LabelInputForm>
      </LabelInputcontainer>
    </Modal>
  );
};

export default LabelAddForm;
