import React, { useState } from "react";

import { useHover } from "../../hooks/useHover";
import useModal from "../../hooks/useModal";
import { color } from "../../utils/constants";
import { defaultStyle } from "../../utils/DefaultDayStyle";
import Modal from "../reminder/Modal";
import ReminderList from "../reminder/ReminderList";

const CalendarGrid = ({ day }) => {
  const { showModal, toggleModal } = useModal();
  const [selectedDate, setSelectedDate] = useState(null);
  const [hover, setHover] = useHover();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    toggleModal();
  };

  return (
    <>
      <Modal showModal={showModal} hide={toggleModal} day={selectedDate} />
      <div
        ref={hover}
        style={{
          ...differentStyle(day),
          ...(setHover ? styles.hover : null),
        }}
        onClick={() => {
          handleDateClick(day.key);
        }}
      >
        {day.text}
        <div style={styles.reminderContainer}>
          <ReminderList day={day.key} />
        </div>
      </div>
    </>
  );
};

export default CalendarGrid;

const differentStyle = (date) => {
  return date.is_offset && date.isWeekend
    ? styles.offsetWeekendDay
    : date.is_offset
    ? styles.previousMonthDay
    : date.isWeekend
    ? styles.weekendDay
    : styles.listOfDays;
};

const styles = {
  listOfDays: {
    ...defaultStyle,
    backgroundColor: color.tertiary,
    fontWeight: "bold",
  },
  weekendDay: {
    ...defaultStyle,
    backgroundColor: "#F2F2F2",
    fontWeight: "bold",
    color: "#2f74b5",
  },
  previousMonthDay: {
    ...defaultStyle,
    color: "rgb(156 163 175)",
    backgroundColor: color.tertiary,
  },
  offsetWeekendDay: {
    ...defaultStyle,
    backgroundColor: "#F2F2F2",
    color: "rgb(156 163 175)",
    paddingLeft: "0.7rem",
  },
  reminderContainer: {
    zIndex: 1,
    position: "absolute",
    width: "7rem",
    minHeight: "1.5rem",
    paddingTop: "1.3rem",
  },
  hover: {
    backgroundColor: color.primary,
    color: color.tertiary,
  },
};
