import { useState, useCallback } from "react";
import { DayPickerContainer, CheckBoxWrapper } from "./DayPicker.styles";
import PickerOptions from "./PickerOptions";

const DAYSOFWEEK = [
  { id: 0, day: "일", isChecked: false },
  { id: 1, day: "월", isChecked: false },
  { id: 2, day: "화", isChecked: false },
  { id: 3, day: "수", isChecked: false },
  { id: 4, day: "목", isChecked: false },
  { id: 5, day: "금", isChecked: false },
  { id: 6, day: "토", isChecked: false },
];
function DayPicker({ onSelecteDay }) {
  // eslint-disable-next-line no-unused-vars
  const [weeks, setWeeks] = useState(DAYSOFWEEK);

  const [selectDay, setSelectDay] = useState(new Set());

  const onChangeHandler = useCallback(
    (e) => {
      const isDay = e.target ? e.target : e;
      if (isDay.checked) {
        selectDay.add(isDay.value);
        setSelectDay(selectDay);
      } else if (!isDay.checked && selectDay.has(isDay.value)) {
        selectDay.delete(isDay.value);
        setSelectDay(selectDay);
      }
      onSelecteDay(selectDay);
    },
    [selectDay, onSelecteDay]
  );

  return (
    <DayPickerContainer>
      <header>요일</header>
      <CheckBoxWrapper>
        {weeks.map((week) => {
          return (
            <PickerOptions
              key={week.id}
              week={week}
              checkDefalut={week.isChecked}
              onCheckBoxChange={onChangeHandler}
            />
          );
        })}
      </CheckBoxWrapper>
    </DayPickerContainer>
  );
}

export default DayPicker;
