import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import {
  addReminder,
  deleteReminder,
  editReminder,
} from "../../features/reminder/ReminderSlice";
import { validate } from "../../utils/Validate";
import DisplayReminders from "./DisplayReminders";
import Form from "./Form";

import "../../sass/calendar.scss";

const Modal = ({ showModal, hide, day }) => {
  const initialValues = { city: "", date: day, time: "", description: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isVisibled, setIsVisibled] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setEditing(true);
    setFormValues({
      city: e.city,
      date: e.date,
      time: e.time,
      description: e.description,
    });
    setId(e.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteReminder(id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const defaultSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsVisibled(true);
    hide();
  };

  const handleAdd = (e) => {
    defaultSubmit(e);
    if (Object.keys(formErrors).length === 0) {
      dispatch(addReminder(formValues));
      setFormValues(initialValues);
    }
  };

  const handleEdit = (e) => {
    defaultSubmit(e);
    if (Object.keys(formErrors).length === 0) {
      dispatch(editReminder({ ...formValues, id }));
      setEditing(false);
      setFormValues(initialValues);
    }
  };

  setTimeout(() => {
    setIsVisibled(false);
  }, 3000);

  const handleClose = () => {
    hide();
    setEditing(false);
    setFormValues(initialValues);
  };

  if (!showModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-header">
          <h3>Reminder</h3>
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <Form
            handleChange={handleChange}
            formValues={formValues}
            formErrors={formErrors}
            isEditing={isEditing}
            isVisibled={isVisibled}
            handleAdd={handleAdd}
            handleEdit={handleEdit}
          />
        </div>
        <div className="modal-reminder">
          <DisplayReminders
            day={day}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </React.Fragment>,
    document.body
  );
};

export default Modal;
