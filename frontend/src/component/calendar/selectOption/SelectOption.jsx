import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectSelectedLabel } from "../../../features/label/label.select";
import { selectEditEvent } from "../../../features/calendar/calendar.select";

function SelectOption({ label }) {
  const optionRef = useRef();
  const selectedLabel = useSelector(selectSelectedLabel);
  const selectEvent = useSelector(selectEditEvent);

  useEffect(() => {
    if (selectEvent) {
      if (
        selectedLabel === null &&
        selectEvent.labelTitle === label.labelTitle
      ) {
        const optionSelect = optionRef.current;
        optionSelect.selected = true;
      }
    }
  }, [selectEvent, selectedLabel, label.labelTitle]);

  useEffect(() => {
    if (selectedLabel && selectedLabel.labelTitle === label.labelTitle) {
      const optionSelect = optionRef.current;
      optionSelect.selected = true;
    }
  }, [selectedLabel, label.labelTitle]);

  return (
    <option value={label._id} ref={optionRef}>
      {label.labelTitle}
    </option>
  );
}

export default SelectOption;
