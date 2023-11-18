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
import { RegisterStyles } from "./RegisterStyles.js";
import { globalStyles } from "../../styles/globalStyles.js";
import { useNavigation } from "@react-navigation/native";
import TextInputDefault from "../../components/TextInputDefault/TextInputDefault.js";

export const Register = () => {
  const navigation = useNavigation(); // Get the navigation object

  onPressRegister = () => {
    // Navigate to the Home screen
    navigation.navigate("Home");
  };

  onPressLogin = () => {
    // Navigate to the Login screen
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={RegisterStyles.container}>
          <Text style={RegisterStyles.register}>Register</Text>
          <View style={RegisterStyles.inputsView}>
            <TextInputDefault label={"Name"} isSecure={false} />
            <TextInputDefault label={"Email"} isSecure={false} />
            <TextInputDefault label={"Password"} isSecure={true} />
            <View style={{ flexDirection: "row" }}>
              {/* TODO: add checkbox */}
              <Text>I agree with terms & conditions</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <TouchableOpacity
                style={{
                  ...RegisterStyles.button,
                  backgroundColor: colors.white,
                  ...globalStyles.shadow,
                  marginBottom: 5,
                }}
                onPress={onPressRegister}
              >
                <Text style={RegisterStyles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
              <Text>Already have an account?</Text>
              <Text style={RegisterStyles.noAccountYet} onPress={onPressLogin}>
                Login here!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
