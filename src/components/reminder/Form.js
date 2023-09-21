import { color } from "../../utils/constants";

const Form = (props) => {
  return (
    <form onSubmit={props.isEditing ? props.handleEdit : props.handleAdd}>
      <div className="form-group">
        <label style={styles.labelForm}>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Add notes"
          value={props.formValues.description}
          onChange={props.handleChange}
          style={{
            height: "50px",
            width: "100%",
          }}
        />
      </div>
      {props.isVisibled && (
        <p style={styles.formErrors}>{props.formErrors.description}</p>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <label style={styles.labelForm}>Date</label>
          <input
            type="date"
            name="date"
            value={props.formValues.date}
            onChange={props.handleChange}
          />
        </div>
        {props.isVisibled && (
          <p style={styles.formErrors}>{props.formErrors.date}</p>
        )}
        <div
          style={{
            marginTop: "-.5rem",
          }}
        >
          <label style={styles.labelForm}>Time</label>
          <input
            type="time"
            name="time"
            value={props.formValues.time}
            onChange={props.handleChange}
          />
        </div>
        {props.isVisibled && (
          <p style={styles.timeError}>{props.formErrors.time}</p>
        )}
      </div>
      <div className="form-group">
        <label style={styles.labelForm}>City</label>
        <input
          type="text"
          name="city"
          placeholder="Add a city"
          value={props.formValues.city}
          onChange={props.handleChange}
        />
      </div>
      {props.isVisibled && (
        <p style={styles.formErrors}>{props.formErrors.city}</p>
      )}
      {!props.isEditing && <button style={styles.button}>Submit</button>}
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
  },
};
