import { View, Text, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from "../../styles/globalStyles";
import { useContext } from 'react';
import UserSessionContext from '../../services/UserSessionContext';
import navigationPaths from '../../navigation/navigationPaths';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../BackButton/BackButton';
import { HeaderStyles } from './HeaderStyles';


export default function Header({ title, showProfile, goBack, style }) {
    const navigation = useNavigation();

    const { user } = useContext(UserSessionContext);

    const handleProfileClick = () => {
        navigation.navigate(navigationPaths.profile);
    }

    return (
        <View style={[HeaderStyles.container, style]} >

            {goBack &&
                <View style={HeaderStyles.backButton}>
                    <BackButton navigation={navigation} />
                </View>
            }

            <Text style={globalStyles.titleText}> {title} </Text>

            {showProfile &&
                <TouchableOpacity onPress={handleProfileClick} style={HeaderStyles.image}>
                    <Image style={HeaderStyles.image} source={{ uri: user.photoUrl }} />
                </TouchableOpacity>
            }

        </View>
    )
}
