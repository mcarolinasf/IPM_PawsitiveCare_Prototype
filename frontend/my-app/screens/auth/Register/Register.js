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
import { RegisterStyles } from "./RegisterStyles.js";
import { globalStyles } from "../../../styles/globalStyles.js";
import navigationPaths from "../../../navigation/navigationPaths.js";
import TextInputDefault from "../../../components/TextInputDefault/TextInputDefault.js";
import { usersApi } from "../../../api/index.js";
import { useState } from "react";
import { InfoModal } from "../../../components/Modal/InfoModal";

export const Register = ({ navigation }) => {
  const [menuModalVisible, setMenuModalVisible] = useState(false);

  const handleMenuPopUp = (value) => {
    setMenuModalVisible(value);
  };

  const [user, setUser] = useState({
    name: "",
    idU: "",
    password: "",
  });

  const onPressRegister = async () => {

    try {


      console.log(Object.values(user))

      const userRes = await usersApi.createUser(user);
      console.log(userRes);
    } catch (error) {
      console.log("Error Message: " + error.message);
      setMenuModalVisible(true);
      useState({
        name: "",
        idU: "",
        password: "",
      });
    }
    navigation.navigate(navigationPaths.login);
  };

  onPressLogin = () => {
    // Navigate to the Login screen
    navigation.navigate(navigationPaths.login);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={RegisterStyles.container}>
          <Text style={RegisterStyles.register}>Register</Text>
          <View style={RegisterStyles.inputsView}>
            <TextInputDefault
              label={"Name"}
              isSecure={false}
              setFunction={(value) => setUser({ ...user, name: value.trim().toLowerCase() })}
              value={user.name}
            />
            <TextInputDefault
              label={"Email"}
              isSecure={false}
              setFunction={(value) => setUser({ ...user, idU: value.trim().toLowerCase() })}
              value={user.idU}
            />
            <TextInputDefault
              label={"Password"}
              isSecure={true}
              setFunction={(value) => setUser({ ...user, password: value.trim().toLowerCase() })}
              value={user.password}
            />
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
