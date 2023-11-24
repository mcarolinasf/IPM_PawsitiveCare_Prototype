import navigationPaths from "../navigation/navigationPaths";
import { TaskType } from "./TaskType";

export const SchedulingActions = [
    {name:TaskType.MEDICATION, navigateTo:navigationPaths.scheduleMed},
    {name:TaskType.FEEDING, navigateTo:navigationPaths.scheduleFed},
    {name:TaskType.GROOMING, navigateTo:navigationPaths.scheduleGroom}
]