import React from "react";

import { color } from "../../utils/constants";
import { getWeekDay } from "../../utils/getWeekdays";
import CalendarGrid from "./CalendarGrid";
import CalenderHeader from "./CalenderHeader";

const weekDays = getWeekDay();

const GetMonth = ({ dates }) => {
  return (
    <div style={styles.calendarContainer}>
      <CalenderHeader weekDays={weekDays} />
      <div style={styles.calendar}>
        {dates.map((date, i) => (
          <CalendarGrid key={i} day={date} />
        ))}
      </div>
    </div>
  );
};

export default GetMonth;

const styles = {
  calendarContainer: {
    width: "98%",
    overflow: "hidden",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    maxHeight: "46.5rem",
    backgroundColor: color.tertiary,
  },
  calendar: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
  },
};
