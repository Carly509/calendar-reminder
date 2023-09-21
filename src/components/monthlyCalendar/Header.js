import React from "react";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { color } from "../../utils/constants";

const Header = ({ dates, handleClick }) => {
  return (
    <div style={styles.headerContainer}>
      <h1>{dates}</h1>
      <div style={{ marginTop: "-1rem" }}>
        <button
          type="button"
          style={styles.button}
          onClick={(e) => handleClick(-1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          type="button"
          style={styles.button}
          onClick={(e) => handleClick(1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Header;

const styles = {
  headerContainer: {
    width: "56rem",
    height: "5rem",
    backgroundColor: color.secondary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
    textAlign: "center",
  },
};
