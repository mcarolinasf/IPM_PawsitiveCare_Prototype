import { CONSTANTS, request } from "./utils";
import axios from 'axios';

const baseURL = CONSTANTS.BACKEND_URL_API + "/tasks";

export const getTasks = async () => {
    const response = await request("get", baseURL + "/");

    return response.data;
};

export const createTask = async (task) => {

    const response = await request("post", baseURL + "/", task);

    return response.data;
};
export const updateTask = async (idT, task) => {

    const response = await request("put", baseURL + "/" + idT, task);

    return response.data;
};

