import React from "react";
import { useSelector } from "react-redux";

import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { color } from "../../utils/constants";
import { reminderDate } from "../../utils/formatDate";
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
    <div style={styles.container} key={reminder.id}>
      <div style={styles.buttonContainer}>
        <button
          type="button"
          style={styles.editButton}
          onClick={() => handleClick(reminder)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          type="button"
          style={styles.deleteButton}
          onClick={() => handleDelete(reminder.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div>
        <p
          style={{
            fontWeight: 300,
            marginLeft: 5,
            color: color.tertiary,
            fontSize: "20px",
            marginTop: "-7px",
          }}
        >
          {reminder.description}
        </p>
        <p style={{ color: color.tertiary, marginLeft: 5, fontSize: "10px" }}>
          {reminderDate(reminder.date)} at {reminder.time}
        </p>
        <Weather
          city={reminder.city}
          currentDate={reminder.date}
          id={reminder.id}
        />
      </div>
    </div>
  ));
};

export default DisplayReminders;

export const styles = {
  container: {
    backgroundColor: color.primary,
    borderRadius: "1px",
    height: "16rem",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
  },
  editButton: {
    color: color.tertiary,
    backgroundColor: color.primary,
    border: "none",
    marginTop: 10,
    "&:hover": {
      backgroundColor: color.tertiary,
    },
  },
  deleteButton: {
    backgroundColor: color.primary,
    border: "none",
    borderRadius: "10%",
    color: color.tertiary,
    marginRight: 5,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};
