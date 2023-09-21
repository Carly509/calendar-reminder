import { getWeekFormat, getMonthCalendar } from "../utils/getMonth";
import { getWeekDay } from "../utils/getWeekdays";

describe("Calendar", () => {
  test("getWeekDay", () => {
    const weekDay = getWeekDay();
    expect(weekDay).toEqual([
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]);
  });

  test("getWeekFormat", () => {
    expect(getWeekFormat(1)).toEqual(2);
    expect(getWeekFormat(7)).toEqual(1);
    expect(getWeekFormat(3)).toEqual(4);
  });

  test("getMonthCalendar", () => {
    expect(getMonthCalendar("2022-09")).toEqual([
      { isWeekend: true, is_offset: true, key: "2022-08-28", text: "28" },
      { isWeekend: false, is_offset: true, key: "2022-08-29", text: "29" },
      { isWeekend: false, is_offset: true, key: "2022-08-30", text: "30" },
      { isWeekend: false, is_offset: true, key: "2022-08-31", text: "31" },
      { isWeekend: false, is_offset: false, key: "2022-09-01", text: "1" },
      { isWeekend: false, is_offset: false, key: "2022-09-02", text: "2" },
      { isWeekend: true, is_offset: false, key: "2022-09-03", text: "3" },
      { isWeekend: true, is_offset: false, key: "2022-09-04", text: "4" },
      { isWeekend: false, is_offset: false, key: "2022-09-05", text: "5" },
      { isWeekend: false, is_offset: false, key: "2022-09-06", text: "6" },
      { isWeekend: false, is_offset: false, key: "2022-09-07", text: "7" },
      { isWeekend: false, is_offset: false, key: "2022-09-08", text: "8" },
      { isWeekend: false, is_offset: false, key: "2022-09-09", text: "9" },
      { isWeekend: true, is_offset: false, key: "2022-09-10", text: "10" },
      { isWeekend: true, is_offset: false, key: "2022-09-11", text: "11" },
      { isWeekend: false, is_offset: false, key: "2022-09-12", text: "12" },
      { isWeekend: false, is_offset: false, key: "2022-09-13", text: "13" },
      { isWeekend: false, is_offset: false, key: "2022-09-14", text: "14" },
      { isWeekend: false, is_offset: false, key: "2022-09-15", text: "15" },
      { isWeekend: false, is_offset: false, key: "2022-09-16", text: "16" },
      { isWeekend: true, is_offset: false, key: "2022-09-17", text: "17" },
      { isWeekend: true, is_offset: false, key: "2022-09-18", text: "18" },
      { isWeekend: false, is_offset: false, key: "2022-09-19", text: "19" },
      { isWeekend: false, is_offset: false, key: "2022-09-20", text: "20" },
      { isWeekend: false, is_offset: false, key: "2022-09-21", text: "21" },
      { isWeekend: false, is_offset: false, key: "2022-09-22", text: "22" },
      { isWeekend: false, is_offset: false, key: "2022-09-23", text: "23" },
      { isWeekend: true, is_offset: false, key: "2022-09-24", text: "24" },
      { isWeekend: true, is_offset: false, key: "2022-09-25", text: "25" },
      { isWeekend: false, is_offset: false, key: "2022-09-26", text: "26" },
      { isWeekend: false, is_offset: false, key: "2022-09-27", text: "27" },
      { isWeekend: false, is_offset: false, key: "2022-09-28", text: "28" },
      { isWeekend: false, is_offset: false, key: "2022-09-29", text: "29" },
      { isWeekend: false, is_offset: false, key: "2022-09-30", text: "30" },
      { isWeekend: true, is_offset: true, key: "2022-10-01", text: "1" },
    ]);
  });
});
