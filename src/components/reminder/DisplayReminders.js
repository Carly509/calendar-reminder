import React from "react";
import { useSelector } from "react-redux";

import Weather from "../weather/Weather";

const DisplayReminders = ({ day, handleClick, handleDelete }) => {
  const { reminders } = useSelector((state) => state.reminder);
  const filteredReminders = reminders.filter(
    (reminder) => reminder.date === day
  );

  if (filteredReminders.length === 0) {
    return (
      <div style={{ textAlign: "center", fontWeight: "bold" }}>
        No reminders...
      </div>
    );
  }
  return filteredReminders.map((reminder) => (
    <div style={{ padding: "1rem" }} key={reminder.id}>
      <Weather
        city={reminder.city}
        currentDate={reminder.date}
        id={reminder.id}
        text={reminder.description}
        time={reminder.time}
        editButton={() => handleClick(reminder)}
        deleteButton={() => handleDelete(reminder.id)}
      />
    </div>
  ));
};

export default DisplayReminders;
