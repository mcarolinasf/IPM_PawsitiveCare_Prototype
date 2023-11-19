import { TouchableOpacity, Text, View } from "react-native";
import { NewButtonStyles } from "./NewButtonStyles";
import { globalStyles } from "../../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";

export const NewButton = ({ title, onPressFunction }) => {
  return (
    <View style={NewButtonStyles.container}>
      <TouchableOpacity
        onPress={onPressFunction}
        style={NewButtonStyles.button}
      >
        <Ionicons name="add" size={30} color="white" />
        <Text
          style={{
            ...globalStyles.subtitleText,
            ...NewButtonStyles.buttonText,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
