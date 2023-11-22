import { CONSTANTS, request } from "./utils";
import axios from 'axios';

const baseURL = CONSTANTS.BACKEND_URL_API + "/pets";


export const getPetTasks = async (idP) => {
    const response = await request("get", baseURL + "/" + idP + "/tasks");

    return response.data;
};