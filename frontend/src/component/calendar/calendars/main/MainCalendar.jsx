import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCalendarEvents,
  selectCalendarisLoading,
  selectCalendarReducer,
} from "../../../../features/calendar/calendar.select";
import { selectEvent } from "../../../../features/calendar/calendarSlice";
import { addEvent } from "../../../../features/calendar/calendar.action";

import {
  DefaultCalendar,
  CALENDAR_VIEW_STYLE,
} from "../../../../utill/calendar/Calendar.config";

import { Backdrop } from "../../../modal/Modal";
import EventEdit from "../../eventEdit/EventEdit";
import EventInput from "../../eventInput/EventInput";
import Button, { BUTTON_TYPE_CLASSES } from "../../../../UI/button/button";
import { EndDayConvertor } from "../../../../utill/timeConvertor";

import Loading from "../../../../UI/loading/Loading";
import { ThreeDots, CalendarX, PlusCircle } from "react-bootstrap-icons";
import {
  CalendarContainer,
  CalendarView,
  CalendarWrapper,
  ButtonContainer,
} from "./MainCalendar.styles";

const banEvent = {
  title: "휴일",
  start: "",
  end: "",
  color: "#ff9f89",
  allDay: true,
  overlap: false,
  display: "background",
};

function MyCalendar() {
  const [isEditFrom, setIsEditFrom] = useState(false);
  const [selectable, setSelectable] = useState(false);
  const [isInputFrom, setIsInputFrom] = useState(false);
  const [eventList, setEventList] = useState(null);

  const eventLists = useSelector(selectCalendarEvents);
  const calendarIsLoading = useSelector(selectCalendarisLoading);
  const { isError, message } = useSelector(selectCalendarReducer);
  const dispatch = useDispatch();

  // 에러 핸들링
  useEffect(() => {
    if (isError) {
      alert(`Error ocurred in event editing ${message}`);
    }
  }, [isError, message]);

  useEffect(() => {
    if (eventLists.length > 0) {
      setEventList(eventLists);
    } else {
      return;
    }
  }, [eventLists]);

  const handleEventClick = (event) => {
    if (selectable) {
      return null;
    }
    const eventData = event.event;

    dispatch(selectEvent(eventData.extendedProps._id));
    setIsEditFrom(!isEditFrom);
  };

  const eventChangehandler = (event) => {
    const eventData = event.event;
    const { startStr, endStr, allDay } = eventData;
    const advenceData = eventData._def.recurringDef && {
      daysOfWeek: [new Date(startStr).getDay().toString()],
    };

    dispatch(
      addEvent(eventLists, {
        _id: eventData.extendedProps._id,
        start: startStr,
        end: allDay ? EndDayConvertor(endStr) : endStr,
        allDay: allDay,
        ...advenceData,
      })
    );
  };

  const handleSelectHandler = (event) => {
    const { startStr, endStr } = event;
    if (window.confirm("해당 날짜를 휴일로 지정하시겠습니까? ")) {
      dispatch(
        addEvent(eventLists, {
          ...banEvent,
          start: startStr,
          end: endStr,
        })
      );
    }
  };

  const toggleModalTypeHandler = (type) => {
    switch (type) {
      case "INPUT":
        if (selectable) {
          return null;
        }
        return setIsInputFrom(!isInputFrom);
      case "EDIT":
        return setIsEditFrom(!isEditFrom);
      case "BAN":
        return setSelectable(!selectable);
      default:
        break;
    }
  };

  const moreLinkIconHandler = (event) => {
    event.text = <ThreeDots />;
  };

  return (
    <>
      {isInputFrom && (
        <EventInput onConfirm={toggleModalTypeHandler.bind(null, "INPUT")} />
      )}
      {isEditFrom && (
        <EventEdit onConfirm={toggleModalTypeHandler.bind(null, "EDIT")} />
      )}
      {selectable && (
        <Backdrop onToggleModal={toggleModalTypeHandler.bind(null, "BAN")} />
      )}
      <CalendarWrapper zvalue={selectable ? 15 : 0}>
        <CalendarView>
          <CalendarContainer>
            {calendarIsLoading ? (
              <Loading />
            ) : (
              <>
                <ButtonContainer>
                  <Button
                    type="click"
                    buttonType={BUTTON_TYPE_CLASSES.ban}
                    onClick={toggleModalTypeHandler.bind(null, "BAN")}
                  >
                    <CalendarX /> 휴일
                  </Button>
                  <Button
                    type="click"
                    buttonType={BUTTON_TYPE_CLASSES.create}
                    onClick={toggleModalTypeHandler.bind(null, "INPUT")}
                  >
                    <PlusCircle /> 생성
                  </Button>
                </ButtonContainer>
                <DefaultCalendar
                  initialView={CALENDAR_VIEW_STYLE.calender.initialView}
                  headerToolbar={CALENDAR_VIEW_STYLE.calender.headerToolbar}
                  selectable={selectable}
                  select={handleSelectHandler}
                  displayEventTime={false}
                  eventClick={handleEventClick}
                  events={eventList}
                  eventChange={eventChangehandler}
                  editable={true}
                  navLinks={true}
                  dayMaxEvents={true}
                  moreLinkContent={moreLinkIconHandler}
                />
              </>
            )}
          </CalendarContainer>
        </CalendarView>
      </CalendarWrapper>
    </>
  );
}

export default MyCalendar;
