import { request } from "./utils";

const baseURL = process.env.BACKEND_URL_API + "/users";

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


