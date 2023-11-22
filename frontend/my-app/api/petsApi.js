import { CONSTANTS, request } from "./utils";
import axios from 'axios';

const baseURL = CONSTANTS.BACKEND_URL_API + "/pets";


export const getPetTasks = async (idP) => {
    const response = await request("get", baseURL + "/" + idP + "/tasks");

    return response.data;
};

export const getPet = async (idP) => {
    const response = await request("get", baseURL + "/" + idP);

    return response.data;
};


export const createEntry = async (idP, entry) => {

    const response = await request("post", baseURL + "/" + idP + "/entries", entry);

    return response.data;
};

export const getPetEntries = async (idP) => {

    const response = await request("get", baseURL + "/" + idP + "/entries");

    return response.data;
};


export const updateEntry = async (idP, entry, idE) => {

    const response = await request("put", baseURL + "/" + idP + "/entries/" + idE, entry);

    return response.data;
};




