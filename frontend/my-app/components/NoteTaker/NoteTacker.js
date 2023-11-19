
import { View, Text, TextInput } from 'react-native'
import { globalStyles } from "../../styles/globalStyles";
import { NoteTackerStyles } from './NoteTackerStyles';
import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors'
import Divider from '../../components/Divider'



export default function NoteTacker({ item }) {


    const menuPopUp = () => {

    }


    return (
        <View style={NoteTackerStyles.container}{...globalStyles.shadow}>
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                <Text style={globalStyles.secondaryText}>5 of October</Text>
                <Entypo name="dots-three-horizontal" size={24} color={colors.secondary} onPress={menuPopUp} />
            </View>
            <Divider />
            <View >
                <TextInput style={NoteTackerStyles.input} multiline={true} />
            </View>
        </View>

    )



}
