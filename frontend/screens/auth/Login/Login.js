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
import { usersApi } from "../../../api/index.js";
import { InfoModal } from "../../../components/Modal/InfoModal";

export const Login = ({ navigation }) => {
  const { user, setUserSession, clearUserSession } =
    useContext(UserSessionContext);
  const [idU, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [menuModalVisible, setMenuModalVisible] = useState(false);

  onPressRegister = () => {
    // Navigate to the Register screen
    navigation.navigate(navigationPaths.register);
  };

  const handleMenuPopUp = () => {
    setMenuModalVisible(!menuModalVisible);
  };

  const handleLogin = async () => {
    // Needs to be tested

    try {
      //Method for login after
      const user = await usersApi.getUser(idU.toLowerCase().trim());
      console.log(user[0]);

      if (user != null) setUserSession(user);
      console.log("USER: " + user);
    } catch (error) {
      //_handleLoginError(error.message);

      handleLoginError(error.message);
    }
  };

  const handleLoginError = () => {
    console.log("Error Message: Invalid parameters");
    setMenuModalVisible(true);
    setEmail("");
    setPassword("");
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
              value={idU}
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
        <InfoModal
          visible={menuModalVisible}
          handleModal={handleMenuPopUp}
          title={"Warning"}
          text={"Invalid parameters"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
