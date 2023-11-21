import axios from 'axios';

export const CONSTANTS = {
  BACKEND_URL_API: "https://pawsitive-care.onrender.com/api",
  BACKEND_URL_API_LOCAL: "https:localhost:8080/api"
}

export const request = async (method, url, data) => {

    const headers = {
        'Content-Type': 'application/json', // Example of setting the Content-Type header
      };
  
    return axios({ method, url, data, headers });

  }; 
/* 
  export const request = async (method, url, data) => {
    try {
      const response = await axios({ method, url, data });
      return response.data;
    } catch (error) {
      // Handle the error here or re-throw it for further handling
      console.error('Request Error:', error);
      throw error;
    }
  }; */
  



//TODO: Authentication
/* import axios from 'axios';
import { auth } from '../../services/firebase'
import { useNavigate } from 'react-router-dom';

let token = localStorage.getItem('token');

export const getToken = async () => {

  if (token !== null) {
    // If the token is already available, return it
    return token;
  }

  const user = auth.currentUser;

  if (user) {
    // If the user is authenticated, get the token
    token = await user.getIdToken();
    localStorage.setItem('token', token); // Store the token in local storage
    //console.log('Token stored:', token);
    return token;
  }

  // If the user is not authenticated, handle accordingly
  // For example, you might redirect the user to the login page
  //console.log('User not authenticated');
  return null;
};

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
 
  //console.log("----- AUTH CHANGE -----")

  if (user) {
    //console.log('User:', user);

    // If the user is authenticated, update the token
    user.getIdToken()
      .then((newToken) => {
        token = newToken;
        localStorage.setItem('token', token); // Store the token in local storage
        //console.log('Token updated: ', token);
      })
      .catch((error) => {
        //console.error('Error getting token:', error);
      });
  } else {
    // If the user is not authenticated, reset the token
    token = null;
    localStorage.removeItem('token'); // Remove the token from local storage
    //console.log('Token removed');
    localStorage.clear();
    return;
  }
});


// Make API request with Firebase token
export const request = async (method, url, data) => {
  //console.log('Token localstorage:', localStorage.getItem('token'));
  const token = await getToken();
  //console.log('Token:', token);
  const headers = { Authorization: `Bearer ${token}` };
  
  return axios({ method, url, data, headers });
}; */