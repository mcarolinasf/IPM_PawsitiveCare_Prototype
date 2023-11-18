import { View, Text, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from "../styles/globalStyles";
import { useContext } from 'react';
import UserSessionContext from '../services/UserSessionContext';
import navigationPaths from '../navigation/navigationPaths';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, showProfile }) {
    const navigation = useNavigation();

    const { user } = useContext(UserSessionContext);

    const handleProfileClick = () => {
        navigation.navigate(navigationPaths.profile);
    }

    return (
        <View style={globalStyles.header} >
            <Text style={globalStyles.titleText}> {title} </Text>
            {showProfile? 
                <TouchableOpacity onPress={handleProfileClick} style={globalStyles.image}>
                    <Image style={{...globalStyles.image, ...globalStyles.shadow}} source={{ uri: user.photoUrl}}/>
                </TouchableOpacity>
                :
                <></>
            }
           
        </View>
    )
}
