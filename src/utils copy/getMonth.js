import { DateTime, Interval } from "luxon";

import { Week_Days, Month_Format, Day_Format } from "./Util";
const Is_A_Weekend = Object.freeze([7, 1]);

export function getWeekFormat(isoWeekDay) {
  return (isoWeekDay % Week_Days) + 1;
}

export function getMonthCalendar(dateString) {
  const month = DateTime.fromFormat(dateString, Month_Format);

  const start = month.startOf("month");
  const end = month.endOf("month");

  const interval = Interval.fromDateTimes(start, end);

  const firstWeekDays = getWeekFormat(interval.start.weekday) - 1;
  const lastWeekDays = Week_Days - getWeekFormat(interval.end.weekday);

  const getCalendar = Interval.fromDateTimes(
    interval.start.minus({ days: firstWeekDays > 0 ? firstWeekDays : 0 }),
    interval.end.plus({ days: lastWeekDays })
  );

  const total_days = getCalendar.count("days");
  const beginnig = getCalendar.start;

  return Array(total_days)
    .fill(null)
    .map((_, index) => {
      const exact_date = beginnig.plus({ days: index });
      return {
        key: exact_date.toFormat(Day_Format),
        text: exact_date.toLocaleString({ day: "numeric" }),
        isWeekend: Is_A_Weekend.includes(getWeekFormat(exact_date.weekday)),
        is_offset: exact_date.month !== month.month,
      };
    });
}
