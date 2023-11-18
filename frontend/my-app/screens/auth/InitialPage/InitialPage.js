import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { InitialPageStyles } from "./InitialPageStyles.js";
import { globalStyles } from "../../../styles/globalStyles.js";
import logo from "../../assets/logo.png";
import colors from "../../../styles/colors.js";
import { useNavigation } from "@react-navigation/native";
import navigationPaths from "../../../navigation/navigationPaths.js";

export const InitialPage = ({navigation}) => {
  const navigation = useNavigation(); // Get the navigation object

  onPressSignIn = () => {
    // Navigate to the Login screen
    navigation.navigate(navigationPaths.login);
  };

  onPressSignUp = () => {
    // Navigate to the Register screen
    navigation.navigate(navigationPaths.register);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={InitialPageStyles.container}>
        <Image source={logo} style={{ ...InitialPageStyles.logo }} />
        <TouchableOpacity
          style={{
            ...InitialPageStyles.button,
            backgroundColor: colors.primary,
            ...globalStyles.shadow,
          }}
          onPress={onPressSignIn}
        >
          <Text style={InitialPageStyles.signIn}>Sign In</Text>
        </TouchableOpacity>

        <Text style={InitialPageStyles.noAccount}>Don't have an account?</Text>

        <TouchableOpacity
          style={{
            ...InitialPageStyles.button,
            backgroundColor: colors.white,
            ...globalStyles.shadow,
          }}
          onPress={onPressSignUp}
        >
          <Text style={InitialPageStyles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
