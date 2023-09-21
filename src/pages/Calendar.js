import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DateTime } from "luxon";

import GetMonth from "../components/monthlyCalendar/GetMonth";
import Header from "../components/monthlyCalendar/Header";
import Modal from "../components/reminder/Modal";
import { getMonth } from "../features/calendar/CalendarSlice";
import useModal from "../hooks/useModal";
import { headerDate } from "../utils/formatDate";
import { Month_Format } from "../utils/Util";
import "../sass/calendar.scss";

const Calendar = (props) => {
  const [value, setValue] = React.useState(0);
  const month = useSelector((state) => state.calendar.month);
  const dispatch = useDispatch();

  const dates = DateTime.local()
    .plus({ month: `${value}` })
    .toFormat(Month_Format);

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getMonth(dates));
    };
    fetchApi();
  }, [dispatch, dates]);

  const handleClick = (num) => {
    setValue((current) => current + num);
  };

  const { showModal, toggleModal } = useModal();
  // your calendar implementation Goes here!
  // Be creative
  return (
    <>
      <div className="container">
        <Header dates={headerDate(dates)} handleClick={handleClick} />
        <GetMonth dates={month} />
        <Modal showModal={showModal} hide={toggleModal} />
      </div>
    </>
  );
};

export default Calendar;
