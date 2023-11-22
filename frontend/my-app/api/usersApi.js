import { CONSTANTS, request } from "./utils";
import axios from 'axios';



const baseURL = CONSTANTS.BACKEND_URL_API + "/users";


export const createUser = async (user) => {

  const response = await request("post", baseURL, user);

  return response.data;


}

export const getAll = async () => {

  const response = await request("get", baseURL);
  return response.data;
};

export const getUser = async (idU) => {
  try {
    const response = await request("get", baseURL + "/" + idU);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (idU, user) => {
  const response = await request("put", baseURL + "/" + idU, user);

  return response.data;
};

export const deleteUser = async (idU) => {
  try {

    const response = await request("delete", baseURL + "/" + idU);

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getUserPets = async (idU) => {
  const response = await request("get", baseURL + "/" + idU + "/pets/");
  return response.data;
};

export const createPet = async (idU, pet) => {

  const response = await request("post", baseURL + "/" + idU + "/pets", pet);

  return response.data;
};

export const getUserTasks = async (idU) => {
  const response = await request("get", baseURL + "/" + idU + '/tasks/');

  return response.data;
};



