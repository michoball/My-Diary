import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../../../features/calendar/calendar.action";
import { selectSelectedLabel } from "../../../../features/label/label.select";

import FormInput from "../../../../UI/formInput/FormInput";
import ColorPicker from "../../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../selectButton/SelectButton";

import { Check2Circle } from "react-bootstrap-icons";
import {
  InputForm,
  ColorSection,
  OptionContainer,
  BtnContainer,
  EventInputContainer,
  BasicInputBg,
  EventButton,
} from "../EventInput.styles";
import { BUTTON_TYPE_CLASSES } from "../../../../UI/button/button";
import {
  selectCalendarEvents,
  selectCalendarReducer,
} from "../../../../features/calendar/calendar.select";

const defaultEvent = {
  labelTitle: "",
  title: "",
  start: "",
  end: "",
  eventStartTime: "",
  eventEndTime: "",
  color: "#f44336",
  allDay: false,
};

function BasicInput() {
  const [basicEventData, setBasicEventData] = useState(defaultEvent);
  const [isDisable, setIsDisable] = useState(false);

  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);
  const eventList = useSelector(selectCalendarEvents);
  const { isError, message } = useSelector(selectCalendarReducer);
  const { title, start, end, color, allDay, eventStartTime, eventEndTime } =
    basicEventData;

  // 에러 핸들링
  useEffect(() => {
    if (isError) {
      alert(`Error ocurred in event editing ${message}`);
    }
  }, [isError, message]);

  useEffect(() => {
    if (selectedLabel) {
      setBasicEventData((prev) => {
        return {
          ...prev,
          title: selectedLabel.labelTitle,
          labelTitle: selectedLabel.labelTitle,
          allDay: selectedLabel.allDay,
          labelId: selectedLabel._id,
          color: selectedLabel.color,
        };
      });
      setIsDisable(true);
    }
  }, [selectedLabel]);

  const inputChangeHandler = (e) => {
    setBasicEventData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const allDayChangeHandler = (isAllDay) => {
    setBasicEventData((prev) => {
      return { ...prev, allDay: isAllDay };
    });
  };

  const colorChangeHandler = (color) => {
    setBasicEventData((prev) => {
      return { ...prev, color: color };
    });
  };

  const defaultSetting = () => {
    setBasicEventData((prev) => {
      return {
        ...prev,
        title: "",
        start: "",
        end: "",
        eventStartTime: "",
        eventEndTime: "",
      };
    });
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (title === "" || start === "" || end === "") {
      return alert("일정에 필요한 정보가 부족합니다.");
    }
    const startSet = allDay
      ? start
      : start + "T" + (eventStartTime ? eventStartTime : "00:00");
    const endSet = allDay
      ? end + "T24:00"
      : end + "T" + (eventEndTime ? eventEndTime : "00:00");
    try {
      dispatch(
        addEvent(eventList, {
          ...basicEventData,
          end: endSet,
          start: startSet,
        })
      );
    } catch (error) {
      alert("something went wrong~!", error);
    }

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
            onChange={inputChangeHandler}
          />

          <FormInput
            label="시작"
            type="date"
            name="start"
            value={start}
            onChange={inputChangeHandler}
          />
          <FormInput
            className="time"
            label=""
            type="time"
            name="eventStartTime"
            value={eventStartTime}
            onChange={inputChangeHandler}
            disabled={allDay ? true : false}
          />
          <FormInput
            label="마침"
            type="date"
            name="end"
            value={end}
            onChange={inputChangeHandler}
          />
          <FormInput
            className="time"
            label=""
            type="time"
            name="eventEndTime"
            value={eventEndTime}
            onChange={inputChangeHandler}
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
          <ColorSection>
            <label>Color</label>
            <ColorPicker
              colorSelected={color}
              disable={isDisable ? true : false}
              onColorPick={colorChangeHandler}
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

export default BasicInput;
