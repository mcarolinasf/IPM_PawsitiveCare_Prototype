
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserSessionContext = createContext();

export const UserSessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
        loadUserSession();
  }, []);

  const loadUserSession = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('userSession');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.log("Error loading authentication: " + error.message);
    }
  };

  const setUserSession = async (userData) => {
    try {
      setUser(userData);
      await AsyncStorage.setItem('userSession', JSON.stringify(userData));
    } catch (error) {
        console.log("Error authenticating: " + error.message);
    }
  };

  const clearUserSession = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem('userSession');
    } catch (error) {
        console.log("Error clearing user session: " + error.message);
    }
  };

  return (
    <UserSessionContext.Provider
      value={{
        user,
        setUserSession,
        clearUserSession,
      }}
    >
      {children}
    </UserSessionContext.Provider>
  );
};

export default UserSessionContext;
