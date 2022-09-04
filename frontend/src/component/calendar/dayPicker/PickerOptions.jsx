import { CheckBoxContainer } from "./DayPicker.styles";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectEditEvent } from "../../../features/calendar/calendar.select";
import { selectSelectedLabel } from "../../../features/label/label.select";

const PickerOptions = ({ week, onCheckBoxChange, checkDefalut }) => {
  const [checked, setChecked] = useState(checkDefalut);
  const dayCheckRef = useRef();

  const selectEvent = useSelector(selectEditEvent);
  const selectedLabel = useSelector(selectSelectedLabel);

  const checkboxHandler = (e) => {
    setChecked(!checked);
    onCheckBoxChange(e);
  };

  useEffect(() => {
    if (!selectEvent && selectedLabel && selectedLabel.daysOfWeek) {
      for (let i = 0; i < selectedLabel.daysOfWeek.length; i++) {
        if (selectedLabel.daysOfWeek[i] === String(week.id)) {
          dayCheckRef.current.checked = true;
          setChecked(true);
          onCheckBoxChange(dayCheckRef.current);
        }
      }
    }
  }, [selectedLabel, week, onCheckBoxChange, selectEvent]);

  useEffect(() => {
    if (selectEvent && selectEvent.daysOfWeek) {
      for (let i = 0; i < selectEvent.daysOfWeek.length; i++) {
        if (selectEvent.daysOfWeek[i] === String(week.id)) {
          dayCheckRef.current.checked = true;
          setChecked(true);
          onCheckBoxChange(dayCheckRef.current);
        }
      }
    }
  }, [selectEvent, week, onCheckBoxChange]);

  return (
    <CheckBoxContainer>
      <label className="day-label" id={week.id}>
        {week.day}
      </label>
      <input
        type="checkbox"
        className="checkbox"
        value={week.id}
        onChange={checkboxHandler}
        checked={checked ? true : false}
        ref={dayCheckRef}
      />
    </CheckBoxContainer>
  );
};

export default PickerOptions;
