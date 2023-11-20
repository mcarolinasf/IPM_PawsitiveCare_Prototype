import navigationPaths from "../navigation/navigationPaths";
import { TaskType } from "./TaskType";

// feeding has been added @gallis
export const SchedulingActions = [
    {name:TaskType.MEDICATION, navigateTo:navigationPaths.profile},
    {name:TaskType.FEEDING, navigateTo:navigationPaths.feeding}, 
    {name:TaskType.TRAINING, navigateTo:navigationPaths.profile},
    {name:TaskType.GROOMING, navigateTo:navigationPaths.profile}
]