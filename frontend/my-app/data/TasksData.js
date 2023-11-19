import { TaskType } from "./TaskType";

export const TasksData = {

    0: {
        id: 0,
        text: 'Med 1',
        type: TaskType.HEALTH,
        time: '10:30',
        date: '2023-11-19',
        petId: 0,
        owners: ['admin'],
        done: false,
    },
    1: {
        id: 1,
        text: 'Med 2',
        type: TaskType.FEEDING,
        time: '10:30',
        date: '2023-11-19',
        petId: 1,
        owners: ['admin'],
        done: false,
    },
    2: {
        id: 2,
        text: 'Lay Down Exercise',
        type: TaskType.TRAINING,
        time: '10:30',
        date: '2023-11-19',
        petId: 2,
        owners: ['admin'],
        done: false,
    },

}