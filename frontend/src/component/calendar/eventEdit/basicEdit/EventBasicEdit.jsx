import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCalendar } from "../../../../features/calendar/calendar.thunk";
import ColorPicker from "../../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../selectButton/SelectButton";
import FormInput from "../../../../UI/formInput/FormInput";
import {
  selectCalendarEvents,
  selectCalendarReducer,
  selectEditEvent,
} from "../../../../features/calendar/calendar.select";
import { addEvent } from "../../../../features/calendar/calendar.action";
import { selectSelectedLabel } from "../../../../features/label/label.select";
import { clearSelectLabel } from "../../../../features/label/labelSlice";
import {
  EventEditForm,
  ConfirmBtn,
  BtnContainer,
  ColorSection,
  OptionContainer,
  BasicInputBg,
  EditInputContainer,
} from "../EventEdit.styles";
import { Trash3Fill, Check2Circle } from "react-bootstrap-icons";
import { DayConvertor, TimeConvertor } from "../../../../utill/timeConvertor";
import { BUTTON_TYPE_CLASSES } from "../../../../UI/button/button";

const defaultEvent = {
  _id: "",
  labelTitle: "",
  title: "",
  start: "",
  end: "",
  eventStartTime: "",
  eventEndTime: "",
  color: "#f44336",
  allDay: false,
};

function EventBasicEdit({ confirm }) {
  const [editEvent, setEditEvent] = useState(defaultEvent);
  const [isDisable, setIsDisable] = useState(false);

  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);
  const selectEvent = useSelector(selectEditEvent);
  const { isError, message } = useSelector(selectCalendarReducer);
  const calendarEventList = useSelector(selectCalendarEvents);
  const {
    _id,
    title,
    start,
    end,
    color,
    allDay,
    eventStartTime,
    eventEndTime,
    labelTitle,
  } = editEvent;
  // 에러 핸들링
  useEffect(() => {
    if (isError) {
      alert(`Error ocurred in event editing ${message}`);
    }
  }, [isError, message]);

  // 편집할 input에 따른 label 태그 바꾸기
  useEffect(() => {
    if (selectEvent.labelTitle === "Ban") {
      setIsDisable(true);
    }
    if (selectEvent.allDay) {
      setIsDisable(true);
    }

    setEditEvent((prev) => {
      return {
        ...prev,
        ...selectEvent,
        end: DayConvertor(selectEvent.end),
        eventEndTime: selectEvent.allDay ? "" : TimeConvertor(selectEvent.end),
        start: DayConvertor(selectEvent.start),
        eventStartTime: selectEvent.allDay
          ? ""
          : TimeConvertor(selectEvent.start),
      };
    });
  }, [selectEvent, dispatch]);

  // label 태그가 바뀜에 따른 editEvent state값 변화
  useEffect(() => {
    if (selectedLabel) {
      if (selectedLabel.labelTitle === labelTitle) {
        return;
      }
      if (!selectedLabel.daysOfWeek) {
        setEditEvent((prev) => {
          return { ...prev, ...selectedLabel };
        });
        setIsDisable(true);
        console.log("baseEdit label set");
      }
      if (selectedLabel.daysOfWeek) {
        dispatch(clearSelectLabel());
        return alert("일일 일정을 정기 일정으로 바꿀 수 없습니다.");
      }
    }
  }, [selectedLabel, labelTitle, dispatch]);

  const onChangeHandler = (e) => {
    setEditEvent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const eventRemoveHandler = () => {
    dispatch(deleteCalendar(_id));
    confirm();
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();

    if ((labelTitle !== "Ban" && title === "") || start === "" || end === "") {
      return alert("일정에 필요한 정보가 부족합니다.");
    }
    const startSet = allDay ? start : start + "T" + eventStartTime;
    const endSet = allDay ? end + "T24:00" : end + "T" + eventEndTime;
    dispatch(
      addEvent(calendarEventList, {
        ...editEvent,
        end: endSet,
        start: startSet,
      })
    );

    alert("일정이 조정되었습니다. ");
    confirm();
  };
  const colorChangeHandler = (color) => {
    setEditEvent((prev) => {
      return { ...prev, color: color };
    });
  };

  const allDayChangeHandler = (allDay) => {
    setEditEvent((prev) => {
      return { ...prev, allDay: allDay };
    });
  };

  return (
    <EventEditForm onSubmit={editSubmitHandler}>
      <EditInputContainer>
        <BasicInputBg>
          <FormInput
            label="제목"
            type="text"
            name="title"
            value={title}
            onChange={onChangeHandler}
            disabled={labelTitle === "Ban" ? true : false}
          />

          <FormInput
            label="시작"
            type="date"
            name="start"
            value={start}
            onChange={onChangeHandler}
          />
          <FormInput
            className="time"
            label=""
            type="time"
            name="eventStartTime"
            value={eventStartTime}
            onChange={onChangeHandler}
            disabled={allDay ? true : false}
          />
          <FormInput
            label="마침"
            type="date"
            name="end"
            value={end}
            onChange={onChangeHandler}
          />
          <FormInput
            className="time"
            label=""
            type="time"
            name="eventEndTime"
            value={eventEndTime}
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
        <ConfirmBtn type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
          <Check2Circle />
          Confirm
        </ConfirmBtn>
        <ConfirmBtn
          className="delete"
          buttonType={BUTTON_TYPE_CLASSES.base}
          type="click"
          onClick={eventRemoveHandler}
        >
          <Trash3Fill /> Delete
        </ConfirmBtn>
      </BtnContainer>
    </EventEditForm>
  );
}

export default EventBasicEdit;
