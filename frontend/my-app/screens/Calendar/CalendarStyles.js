
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export const CalendarStyles = StyleSheet.create({

    calendarTheme: {
        backgroundColor: 'red',
        calendarBackground: 'transparent',
        textSectionTitleColor: 'grey',
        selectedDayBackgroundColor: colors.primary,
        selectedDayTextColor: 'white',
        todayTextColor: colors.primary,
        dayTextColor: colors.grey,
        textDisabledColor: 'grey',
        arrowColor: colors.primary
    },

    buttonContainer: {
        marginTop: 40,
    }

})
