import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../../../features/calendar/calendar.action";
import { selectSelectedLabel } from "../../../../features/label/label.select";

import FormInput from "../../../../UI/formInput/FormInput";
import DayPicker from "../../dayPicker/DayPicker";
import ColorPicker from "../../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../selectButton/SelectButton";
import {
  InputForm,
  EventButton,
  ColorSection,
  OptionContainer,
  BtnContainer,
  EventInputContainer,
  BasicInputBg,
} from "../EventInput.styles";
import { Check2Circle } from "react-bootstrap-icons";
import { BUTTON_TYPE_CLASSES } from "../../../../UI/button/button";
import {
  selectCalendarEvents,
  selectCalendarReducer,
} from "../../../../features/calendar/calendar.select";

const advanceEvent = {
  labelTitle: "",
  color: "#f44336",
  allDay: false,
  daysOfWeek: null,
  title: "",
  startRecur: "",
  endRecur: "",
  startTime: "",
  endTime: "",
};

function AdvanceInput() {
  const [advancedEventData, setAdvancedEventData] = useState(advanceEvent);
  const [isDisable, setIsDisable] = useState(false);
  const {
    startRecur,
    endRecur,
    title,
    startTime,
    endTime,
    color,
    allDay,
    daysOfWeek,
  } = advancedEventData;
  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);
  const calendarEvent = useSelector(selectCalendarEvents);
  const { isError, message } = useSelector(selectCalendarReducer);

  // 에러 핸들링
  useEffect(() => {
    if (isError) {
      alert(`Error ocurred in event editing ${message}`);
    }
  }, [isError, message]);

  useEffect(() => {
    if (selectedLabel) {
      selectedLabelHanlder(selectedLabel);
      setIsDisable(true);
    }
  }, [selectedLabel]);

  const selectedLabelHanlder = (label) => {
    setAdvancedEventData((prev) => {
      return {
        ...prev,
        labelTitle: label.labelTitle,
        allDay: label.allDay,
        labelId: label._id,
        color: label.color,
        daysOfWeek: label.daysOfWeek,
      };
    });
  };

  const selectedDay = useCallback((day) => {
    setAdvancedEventData((prev) => {
      return { ...prev, daysOfWeek: [...day] };
    });
  }, []);

  const onChangeHandler = (e) => {
    setAdvancedEventData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const allDayChangeHandler = (isAllDay) => {
    setAdvancedEventData((prev) => {
      return { ...prev, allDay: isAllDay };
    });
  };

  const ColorChangeHandler = (color) => {
    setAdvancedEventData((prev) => {
      return { ...prev, color: color };
    });
  };

  const defaultSetting = () => {
    setAdvancedEventData((prev) => {
      return {
        ...prev,
        title: "",
        startRecur: "",
        endRecur: "",
        startTime: "",
        endTime: "",
      };
    });
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (
      title === "" ||
      startRecur === "" ||
      endRecur === "" ||
      daysOfWeek.length === 0
    ) {
      return alert("일정에 필요한 정보가 부족합니다.");
    }
    dispatch(
      addEvent(calendarEvent, {
        ...advancedEventData,
        endRecur: endRecur + "T24:00",
      })
    );

    defaultSetting();
    alert("정상적으로 일정이 만들어졌습니다. ");
  };

  return (
    <InputForm onSubmit={submitHanbler}>
      <EventInputContainer>
        <BasicInputBg>
          <FormInput
            label="제목"
            type="text"
            name="title"
            value={title}
            className="title"
            onChange={onChangeHandler}
          />

          <FormInput
            label="기간"
            type="date"
            name="startRecur"
            value={startRecur}
            onChange={onChangeHandler}
          />
          <FormInput
            className="time"
            label="~"
            type="date"
            name="endRecur"
            value={endRecur}
            onChange={onChangeHandler}
          />
          <FormInput
            label="시작"
            type="time"
            name="startTime"
            value={startTime}
            onChange={onChangeHandler}
            disabled={allDay ? true : false}
          />
          <FormInput
            className="time"
            label="~"
            type="time"
            name="endTime"
            value={endTime}
            onChange={onChangeHandler}
            disabled={allDay ? true : false}
          />
        </BasicInputBg>

        <OptionContainer>
          <SelectButton />
          <ToggleSwitch
            title="종일"
            type="allDay"
            disabled={isDisable ? true : false}
            onSwitchEvent={isDisable ? () => {} : allDayChangeHandler}
            toggleValue={allDay}
          />
          <DayPicker onSelecteDay={selectedDay} />
          <ColorSection>
            <label>Color</label>
            <ColorPicker
              colorSelected={color}
              onColorPick={ColorChangeHandler}
              disable={isDisable ? true : false}
            />
          </ColorSection>
        </OptionContainer>
      </EventInputContainer>
      <BtnContainer>
        <EventButton buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
          <Check2Circle />
          submit
        </EventButton>
      </BtnContainer>
    </InputForm>
  );
}

export default AdvanceInput;
