import { TouchableOpacity, Text, View, Image } from "react-native";
import { PetPictureStyles } from "./PetPictureStyles";
import { globalStyles } from "../../styles/globalStyles";

export const PetPicture = (pet) => {
  return (
    <View style={globalStyles.container}>
        {/* <Image  source={{uri:'https://cdn.britannica.com/92/212692-004-D4E5AD34/labradoodle-dog-stick-running-grass.jpg'}} /> */}
        {/* <Text>{pet.photoUrl}</Text> */}
        <Image  style={PetPictureStyles.rectangle} source={{uri: pet.photoUrl}}/>
    </View>
    
    // <Image  style={PetPictureStyles.rectangle} source={{uri: pet.photoUrl}} />
  );
};
