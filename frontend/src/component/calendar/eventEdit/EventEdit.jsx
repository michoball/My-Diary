import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCalendarisLoading,
  selectEditEvent,
} from "../../../features/calendar/calendar.select";
import { clearSelectLabel } from "../../../features/label/labelSlice";
import { clearSelectEvent } from "../../../features/calendar/calendarSlice";

import Modal from "../../modal/Modal";
import { X } from "react-bootstrap-icons";
import Button, { BUTTON_TYPE_CLASSES } from "../../../UI/button/button";
import Loading from "../../../UI/loading/Loading";

import {
  EventToggerContainer,
  EventEditcontainer,
  EventTogger,
} from "./EventEdit.styles";
import EventAdvanceEdit from "./advanceEdit/EventAdvanceEdit";

import EventBasicEdit from "./basicEdit/EventBasicEdit";

function EventEdit({ onConfirm }) {
  const [isRecurrEvent, setIsRecurrEvent] = useState(false);
  const dispatch = useDispatch();
  const selectEvent = useSelector(selectEditEvent);
  const calendarIsLoading = useSelector(selectCalendarisLoading);

  useEffect(() => {
    if (selectEvent) {
      setIsRecurrEvent(selectEvent.daysOfWeek ? true : false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggerClickHanndler = (bool) => {
    setIsRecurrEvent(bool);
  };

  const OffModalHandler = () => {
    dispatch(clearSelectEvent());
    dispatch(clearSelectLabel());
    onConfirm();
  };

  return (
    <Modal toggleModal={OffModalHandler}>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.cancel}
        type="click"
        onClick={OffModalHandler}
      >
        <X />
      </Button>
      <EventEditcontainer>
        <EventToggerContainer>
          <EventTogger
            className={isRecurrEvent ? "" : "active"}
            onClick={toggerClickHanndler.bind(null, false)}
            disabled={isRecurrEvent ? true : false}
          >
            일일
          </EventTogger>
          <EventTogger
            className={isRecurrEvent ? "active" : ""}
            onClick={toggerClickHanndler.bind(null, true)}
            disabled={isRecurrEvent ? false : true}
          >
            정기
          </EventTogger>
        </EventToggerContainer>
        {calendarIsLoading ? (
          <Loading />
        ) : (
          <>
            {isRecurrEvent ? (
              <EventAdvanceEdit confirm={OffModalHandler} />
            ) : (
              <EventBasicEdit confirm={OffModalHandler} />
            )}
          </>
        )}
      </EventEditcontainer>
    </Modal>
  );
}

export default EventEdit;
