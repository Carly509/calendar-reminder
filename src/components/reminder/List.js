import React from "react";

const List = ({ filteredReminders }) => {
  return filteredReminders.map((reminder) => (
    <p
      key={reminder.id}
      style={{
        fontSize: "10px",
        color: "white",
        fontWeight: "200",
        marginBottom: "-.5rem",
      }}
    >
      - {reminder.description.substring(0, 10) + "..."}
    </p>
  ));
};

export default List;
