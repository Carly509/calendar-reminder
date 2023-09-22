import React from "react";
import { useSelector } from "react-redux";

import { useHover } from "../../hooks/useHover";
import { color } from "../../utils/constants";
import SharedList from "./List";

const ReminderList = ({ day }) => {
  const { reminders } = useSelector((state) => state.reminder);
  const [hover, setHover] = useHover();
  const filteredReminders = reminders.filter(
    (reminder) => reminder.date === day
  );

  const isMoreThanOneReminder = filteredReminders.length > 3;

  return (
    <div
      ref={hover}
      style={{
        ...styles.reminderContainer,
        ...(setHover ? styles.hover : null),
      }}
    >
      {!isMoreThanOneReminder ? (
        <SharedList filteredReminders={filteredReminders} />
      ) : (
        <>
          <SharedList filteredReminders={filteredReminders.slice(0, 3)} />
          <p
            style={{
              fontSize: "10px",
              color: "white",
              fontWeight: "300",
            }}
          >
            - {filteredReminders.length - 3} more...
          </p>
        </>
      )}
    </div>
  );
};

export default ReminderList;

export const styles = {
  reminderContainer: {
    backgroundColor: color.primary,
    maxHeight: "4.9rem",
    marginTop: "0.3rem",
    cursor: "pointer",
    borderRadius: "0.25rem",
  },
  hover: {
    backgroundColor: color.secondary,
  },
};
