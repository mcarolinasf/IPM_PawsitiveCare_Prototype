import { CONSTANTS, request } from "./utils";
import axios from 'axios';

const baseURL = CONSTANTS.BACKEND_URL_API + "/tasks";

export const getTasks = async () => {
    const response = await request("get", baseURL + "/");

    return response.data;
};

