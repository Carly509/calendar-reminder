import React from "react";

import { color } from "../../utils/constants";

const CalenderHeader = ({ weekDays }) => {
  return (
    <div style={styles.weekDays}>
      {weekDays.map((weekDay) => (
        <h3 key={weekDay} style={styles.daysTitle}>
          {weekDay}
        </h3>
      ))}
    </div>
  );
};

export default CalenderHeader;

const styles = {
  weekDays: {
    display: "flex",
    width: "100%",
    backgroundColor: "#2f74b5",
    color: color.tertiary,
    justifyContent: "space-around",
    alignItems: "center",
  },
  daysTitle: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: color.tertiary,
    marginTop: 0,
  },
};
