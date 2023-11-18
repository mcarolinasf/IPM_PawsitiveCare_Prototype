import { View, Text, Image } from 'react-native'
import { globalStyles } from "../styles/globalStyles";

export default function Header({ title }) {

    return (
        <View style={globalStyles.header}>
            <Text style={globalStyles.titleText}> {title} </Text>
            <Image
                style={globalStyles.image}
                //TODO: pass current User photo
                source={{
                    uri: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg'
                }} />
        </View>
    )
}
