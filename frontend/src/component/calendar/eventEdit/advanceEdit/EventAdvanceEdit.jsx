import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addEvent } from "../../../../features/calendar/calendar.action";
import { deleteCalendar } from "../../../../features/calendar/calendar.thunk";
import { selectSelectedLabel } from "../../../../features/label/label.select";
import {
  selectEditEvent,
  selectCalendarEvents,
  selectCalendarReducer,
} from "../../../../features/calendar/calendar.select";
import { clearSelectLabel } from "../../../../features/label/labelSlice";
import FormInput from "../../../../UI/formInput/FormInput";
import DayPicker from "../../dayPicker/DayPicker";
import ColorPicker from "../../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../selectButton/SelectButton";

import {
  EventEditForm,
  ConfirmBtn,
  ColorSection,
  OptionContainer,
  BtnContainer,
  EditInputContainer,
  BasicInputBg,
} from "../EventEdit.styles";
import { Trash3Fill, Check2Circle } from "react-bootstrap-icons";
import { DayConvertor } from "../../../../utill/timeConvertor";

const advanceEvent = {
  _id: "",
  labelTitle: "",
  title: "",
  color: "#f44336",
  allDay: false,
  daysOfWeek: [],
  startRecur: "",
  endRecur: "",
  startTime: "",
  endTime: "",
};

function EventAdvanceEdit({ confirm }) {
  const [advancedEventData, setAdvancedEventData] = useState(advanceEvent);
  const [isDisable, setIsDisable] = useState(false);
  const {
    _id,
    startRecur,
    endRecur,
    title,
    startTime,
    endTime,
    color,
    allDay,
    daysOfWeek,
    labelTitle,
  } = advancedEventData;
  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);
  const selectEvent = useSelector(selectEditEvent);
  const calendarEventList = useSelector(selectCalendarEvents);
  const { isError, message } = useSelector(selectCalendarReducer);

  // 에러 핸들링
  useEffect(() => {
    if (isError) {
      alert(`Error ocurred in event editing ${message}`);
    }
  }, [isError, message]);

  useEffect(() => {
    if (selectEvent.allDay) {
      setIsDisable(true);
    }

    setAdvancedEventData((prev) => ({
      ...prev,
      ...selectEvent,
      endRecur: DayConvertor(selectEvent.endRecur),
    }));
  }, [selectEvent, dispatch]);

  useEffect(() => {
    if (selectedLabel) {
      if (selectedLabel.labelTitle === labelTitle) {
        return;
      }
      if (selectedLabel.daysOfWeek) {
        setAdvancedEventData((prev) => {
          return {
            ...prev,
            ...selectedLabel,
          };
        });
        console.log("advanceEdit label");
        setIsDisable(true);
      } else {
        dispatch(clearSelectLabel());
        return alert("정기 일정을 일일 일정으로 바꿀 수 없습니다.");
      }
    }
  }, [selectedLabel, labelTitle, dispatch]);

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

  const eventRemoveHandler = () => {
    dispatch(deleteCalendar(_id));
    confirm();
  };

  const colorChangeHandler = (color) => {
    setAdvancedEventData((prev) => {
      return { ...prev, color: color };
    });
  };

  const allDayChangeHandler = (isAllDay) => {
    setAdvancedEventData((prev) => {
      return { ...prev, allDay: isAllDay };
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
    try {
      dispatch(
        addEvent(calendarEventList, {
          ...advancedEventData,
          endRecur: endRecur + "T24:00",
        })
      );
    } catch (error) {
      alert("add Event went wrong~!", error);
    }
    alert("일정이 조정되었습니다. ");
    confirm();
  };

  return (
    <EventEditForm onSubmit={submitHanbler}>
      <EditInputContainer>
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
              onColorPick={colorChangeHandler}
              disable={isDisable ? true : false}
            />
          </ColorSection>
        </OptionContainer>
      </EditInputContainer>
      <BtnContainer>
        <ConfirmBtn type="submit">
          <Check2Circle />
          Confirm
        </ConfirmBtn>
        <ConfirmBtn
          className="delete"
          type="click"
          onClick={eventRemoveHandler}
        >
          <Trash3Fill /> Delete
        </ConfirmBtn>
      </BtnContainer>
    </EventEditForm>
  );
}

export default EventAdvanceEdit;
