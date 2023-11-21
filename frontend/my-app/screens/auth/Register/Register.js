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
import { ConfirmationModal } from '../../../components/Modal/ConfirmationModal';


export const Register = ({ navigation }) => {

  const [menuModalVisible, setMenuModalVisible] = useState(false)


  const handleMenuPopUp = () => {
    setMenuModalVisible(!menuModalVisible);
  }



  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onPressRegister = async () => {
    try {
      const user = await usersApi.createUser(user)
      console.log(user)
      // Navigate to the Home screen
      navigation.navigate(navigationPaths.home);
    } catch (error) {
      console.log("Error Message: " + error.message)
      setUser('')
      setMenuModalVisible(!menuModalVisible);

    }
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
            <TextInputDefault label={"Name"} isSecure={false} setFunction={(value) => setUser({ ...user, name: value })} value={user.name} />
            <TextInputDefault label={"Email"} isSecure={false} setFunction={(value) => setUser({ ...user, email: value })} value={user.email} />
            <TextInputDefault label={"Password"} isSecure={true} setFunction={(value) => setUser({ ...user, password: value })} value={user.password} />
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

        < ConfirmationModal
          visible={menuModalVisible}
          onClose={handleMenuPopUp}
          handleModal={handleMenuPopUp}
          title={'Warning'}
          text={'Wrong email or password'}
        />

      </ScrollView>
    </SafeAreaView>
  );
};
