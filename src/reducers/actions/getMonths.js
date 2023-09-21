export const Set_Months = "Set_Months";
export const Set_Months_Error = "Set_Months_Error";
export const Set_Months_Loading = "Set_Months_Loading";

export const getMonths = (month) => {
  return {
    type: Set_Months,
    payload: month,
  };
};
