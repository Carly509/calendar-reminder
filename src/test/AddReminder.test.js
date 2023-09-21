import { Provider as ReduxProvider } from "react-redux";

import { configureStore, createStore } from "@reduxjs/toolkit";
import { render, fireEvent, screen } from "@testing-library/react";

import Modal from "../components/reminder/Modal";
import reminderReducer from "../features/reminder/ReminderSlice";

function renderWithRedux(
  ui,
  {
    preloadedState = {
      reminders: [
        {
          id: 1,
          date: "2021-08-01",
          time: "10:00",
          city: "New York",
          description: "Meeting with John",
        },
      ],
    },
    store = configureStore({
      reducer: { reminders: reminderReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <ReduxProvider
        store={createStore(reminderReducer, { reminders: preloadedState })}
      >
        {children}
      </ReduxProvider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test("Add reminder", () => {
  renderWithRedux(<Modal showModal={true} hide={() => {}} />);
  fireEvent.change(screen.getByLabelText("City"), {
    target: { value: "London" },
  });
  expect(screen.getByLabelText("City")).toHaveValue("London");
  fireEvent.change(screen.getByLabelText("Time"), {
    target: { value: "12:00" },
  });
  expect(screen.getByLabelText("Time")).toHaveValue("12:00");
  fireEvent.change(screen.getByLabelText("Description"), {
    target: { value: "Meeting" },
  });
  expect(screen.getByLabelText("Description")).toHaveValue("Meeting");
  fireEvent.change(screen.getByLabelText("Date"), {
    target: { value: "2021-08-01" },
  });
  expect(screen.getByLabelText("Date")).toHaveValue("2021-08-01");
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getByText("London")).toBeInTheDocument();
  expect(screen.getByText("12:00")).toBeInTheDocument();
  expect(screen.getByText("Meeting")).toBeInTheDocument();
  expect(screen.getByText("2021-08-01")).toBeInTheDocument();
});
