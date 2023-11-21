import { CONSTANTS, request } from "./utils";
import axios from 'axios';


//const baseURL = process.env.BACKEND_URL_API + "/users";
const baseURL = CONSTANTS.BACKEND_URL_API + "/users";

console.log("-------- " + baseURL)
console.log( CONSTANTS.BACKEND_URL_API)

export const getAll = async () => {

  axios.get(baseURL)
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    if (error.response) {
      // The request was made and the server responded with a status code
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

  
/*   const response = await request("get", baseURL);

  return response.data; */
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


