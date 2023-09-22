import { color } from "../../utils/constants";

const Form = (props) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onSubmit={props.isEditing ? props.handleEdit : props.handleAdd}
    >
      <div style={{ border: "1px solid #3073B5", borderRadius: "5px" }}>
        <div className="form-group">
          {/* <label style={styles.labelForm}>Description</label> */}
          <input
            type="text"
            name="description"
            placeholder="Add notes"
            value={props.formValues.description}
            onChange={props.handleChange}
            style={{
              height: "50px",
              width: "90%",
              border: "none",
              backgroundColor: "#F2F2F2",
              margin: "1rem",
              marginBottom: "-15px",
            }}
          />
        </div>
        {props.isVisibled && (
          <p style={styles.formErrors}>{props.formErrors.description}</p>
        )}
        <div className="form-group">
          {/* <label style={styles.labelForm}>City</label> */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={props.formValues.city}
            onChange={props.handleChange}
            style={{
              margin: "1rem",
              border: "none",
              borderBottom: "none",
              backgroundColor: "#F2F2F2",
              height: "2rem",
            }}
          />
        </div>
        {props.isVisibled && (
          <p style={styles.formErrors}>{props.formErrors.city}</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "1rem",
            marginTop: "-3px",
          }}
        >
          {/* <label style={styles.labelForm}>Date</label> */}
          <input
            type="date"
            name="date"
            value={props.formValues.date}
            onChange={props.handleChange}
            style={{
              border: "none",
              borderBottom: "none",
              backgroundColor: "#F2F2F2",
            }}
          />

          {props.isVisibled && (
            <p style={styles.formErrors}>{props.formErrors.date}</p>
          )}
          <div
            style={{
              marginTop: "-.1rem",
              marginLeft: ".5rem",
            }}
          >
            {/* <label style={styles.labelForm}>Time</label> */}
            <input
              type="time"
              name="time"
              value={props.formValues.time}
              onChange={props.handleChange}
              style={{
                border: "none",
                borderBottom: "none",
                backgroundColor: "#F2F2F2",
              }}
            />
          </div>
          {props.isVisibled && (
            <p style={styles.timeError}>{props.formErrors.time}</p>
          )}
        </div>
      </div>
      {!props.isEditing && <button style={styles.button}>ADD</button>}
      {props.isEditing && <button style={styles.button}>Edit</button>}
    </form>
  );
};

export default Form;

const styles = {
  labelForm: {
    display: "block",
    fontSize: "medium",
    color: color.primary,
  },
  formErrors: {
    fontSize: "x-small",
    color: "red",
  },
  timeError: {
    fontSize: "x-small",
    color: "red",
    marginTop: "4rem",
    marginLeft: "-17rem",
  },
  button: {
    backgroundColor: color.primary,
    color: color.tertiary,
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "18px",
  },
};
