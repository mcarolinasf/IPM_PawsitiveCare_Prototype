import { TaskType } from "../data/TaskType";
import colors from "../styles/colors";
import { PetsData } from '../data/PetsData.js';



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
      return "#A2DFA5";
    case TaskType.FEEDING:
      return "#F0C49C";
    case TaskType.TRICKS:
      return "#DF909B";
    case TaskType.COACHING:
      return "#6ADBE3";
    case TaskType.GROOMING:
      return "#DF909B";
    default:
      return colors.secondary;
  }
};

export const getPetsByOwner = (owner) => {
  var petIds = owner.petIds;
  return petIds.map((id) => PetsData[id]);
}

export const stringToTime = (timeStr) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const currentTime = new Date();
  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);

  return currentTime;
}

export const timeToString = (time) => {

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}

export const dateToString = (date) => {
  return date.toISOString().split('T')[0]
}