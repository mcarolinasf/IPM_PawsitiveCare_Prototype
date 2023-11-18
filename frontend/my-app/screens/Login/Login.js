import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "../../styles/colors.js";
import { LoginStyles } from "./LoginStyles.js";
import { globalStyles } from "../../styles/globalStyles.js";
import navigationPaths from "../../navigation/navigationPaths.js";
import TextInputDefault from "../../components/TextInputDefault/TextInputDefault.js";

export const Login = ({ navigation }) => {
  onPressLogin = () => {
    // Navigate to the Home screen
    navigation.navigate(navigationPaths.home);
  };

  onPressRegister = () => {
    // Navigate to the Register screen
    navigation.navigate(navigationPaths.register);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* TODO: Maybe set scroll offset when TextInput -> onFocus for better user experience??*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={LoginStyles.container}>
          <Text style={LoginStyles.welcome}>Welcome</Text>
          <View style={LoginStyles.inputsView}>
            <TextInputDefault label={"Email"} isSecure={false} />
            <TextInputDefault label={"Password"} isSecure={true} />
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
                onPress={onPressLogin}
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
