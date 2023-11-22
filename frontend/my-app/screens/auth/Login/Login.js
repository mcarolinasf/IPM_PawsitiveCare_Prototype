import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "../../../styles/colors.js";
import { LoginStyles } from "./LoginStyles.js";
import { globalStyles } from "../../../styles/globalStyles.js";
import navigationPaths from "../../../navigation/navigationPaths.js";
import TextInputDefault from "../../../components/TextInputDefault/TextInputDefault.js";
import { useState, useContext, useEffect } from "react";
import UserSessionContext from "../../../services/UserSessionContext.js";
import userData from "../../../data/UserData.js";
import { usersApi } from "../../../api/index.js";

export const Login = ({ navigation }) => {
  const { user, setUserSession, clearUserSession } =
    useContext(UserSessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  onPressRegister = () => {
    // Navigate to the Register screen
    navigation.navigate(navigationPaths.register);
  };

  const handleLogin = async () => {
    // Needs to be tested

    try {
      //Method for login after
      const user = await usersApi.getUser(email.toLowerCase().trim());
      if (user != null) setUserSession(user);
      console.log("USER: " + user);
    } catch (error) {
      //_handleLoginError(error.message);
      console.log("Error Message: " + error.message);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* TODO: Maybe set scroll offset when TextInput -> onFocus for better user experience??*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={LoginStyles.container}>
          <Text style={LoginStyles.welcome}>Welcome</Text>
          <View style={LoginStyles.inputsView}>
            <TextInputDefault
              label={"Email"}
              isSecure={false}
              setFunction={setEmail}
              value={email}
            />
            <TextInputDefault
              label={"Password"}
              isSecure={true}
              setFunction={setPassword}
              value={password}
            />
            <View style={{ flexDirection: "row" }}>
              {/* TODO: add checkbox */}
              <Text>I agree with terms & conditions</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 100 }}>
              <TouchableOpacity
                style={{
                  ...LoginStyles.button,
                  backgroundColor: colors.white,
                  ...globalStyles.shadow,
                  marginBottom: 5,
                }}
                onPress={handleLogin}
              >
                <Text style={LoginStyles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Text>Don't have an account yet?</Text>
              <Text style={LoginStyles.noAccountYet} onPress={onPressRegister}>
                Register here!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
