import { TouchableOpacity, Text, View } from "react-native";
import { NewButtonStyles } from "./NewButtonStyles";
import { globalStyles } from "../../styles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../styles/colors";

export const NewButton = ({ title, onPressFunction }) => {
  return (
    <View style={NewButtonStyles.container}>
      <TouchableOpacity
        onPress={onPressFunction}
        style={NewButtonStyles.button}
      >
        <FontAwesome5 name={"plus"} size={18} color={colors.white} />
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
