import { Info } from "luxon";

import { Week_Days } from "./Util";

export function getWeekDay() {
  const weekDay = Info.weekdays("long", { locale: "en-US" });

  const weekDayArray = Array(Week_Days)
    .fill(null)
    .map((_, index) => {
      return weekDay[index];
    });

  return [weekDayArray[Week_Days - 1], ...weekDayArray.slice(0, Week_Days - 1)];
}
