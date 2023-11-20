import { TaskType } from "../data/TaskType";
import colors from "../styles/colors";

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getTypeColor = (type) => {
  switch (type) {
    case TaskType.HEALTH:
      return "#A1E1A4";
    case TaskType.FEEDING:
      return "#F0C49C";
    case TaskType.TRICKS:
      return "#DF909B";
    case TaskType.COACHING:
      return "#6ADBE3";
    case TaskType.GROOMING:
      return "#DF0000";
    default:
      return colors.secondary;
  }
};
