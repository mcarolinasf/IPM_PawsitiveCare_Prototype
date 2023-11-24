import { View, Text, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from "../../styles/globalStyles";
import { useContext } from 'react';
import UserSessionContext from '../../services/UserSessionContext';
import navigationPaths from '../../navigation/navigationPaths';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../BackButton/BackButton';
import { HeaderStyles } from './HeaderStyles';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';

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
                    {user.photoUrl ?
                        <Image style={HeaderStyles.image} source={{ uri: user.photoUrl }} />
                        :
                        <Image style={HeaderStyles.image} source={{ uri: 'https://www.verywellmind.com/thmb/pwEmuUJ6KO9OF8jeiQCDyKnaVQI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1187609003-73c8baf32a6a46a6b84fe931e0c51e7e.jpg' }} />
                    }

                </TouchableOpacity>
            }

        </View>
    )
}
