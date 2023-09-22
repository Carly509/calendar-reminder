import React from "react";

const List = ({ filteredReminders }) => {
  return filteredReminders.map((reminder) => (
    <div style={{ borderBottom: "1px solid #fff", marginBottom: "-1rem" }}>
      <p
        key={reminder.id}
        style={{
          fontSize: "10px",
          color: "white",
          fontWeight: "200",
        }}
      >
        - {reminder.description.substring(0, 15) + "..."}
      </p>
    </div>
  ));
};

export default List;
