export const validate = (values) => {
  const errors = {};
  if (!values.city) {
    errors.city = "City is required!";
  } else if (values.city.length < 3) {
    errors.city = "City must be at least 3 characters!";
  }
  if (!values.date) {
    errors.date = "Date is required!";
  }
  if (!values.time) {
    errors.time = "Time is required";
  }
  if (values.description.length < 4) {
    errors.description = "must be more than 4 characters";
  } else if (values.description.length > 30) {
    errors.description = "Cannot exceed more than 30 characters";
  }
  return errors;
};
