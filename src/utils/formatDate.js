export const headerDate = (value) => {
  return new Date(value.replace(/-/g, "/")).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });
};

export const reminderDate = (value) => {
  return new Date(value.replace(/-/g, "/")).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
