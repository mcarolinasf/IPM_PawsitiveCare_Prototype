import navigationPaths from "../navigation/navigationPaths";
import { TaskType } from "./TaskType";

export const SchedulingActions = [
    {name:TaskType.MEDICATION, navigateTo:navigationPaths.profile},
    {name:TaskType.FEEDING, navigateTo:navigationPaths.profile},
    {name:TaskType.TRAINING, navigateTo:navigationPaths.profile},
    {name:TaskType.GROOMING, navigateTo:navigationPaths.profile}
]