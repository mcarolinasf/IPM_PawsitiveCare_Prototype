
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from "./navigation/Navigation";
import { UserSessionProvider } from './services/UserSessionContext';

export default function App() {
  return ( 
    <UserSessionProvider>
      <Navigation/>
    </UserSessionProvider>
  );
}

