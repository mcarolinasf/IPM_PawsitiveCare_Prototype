
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export const CalendarStyles = StyleSheet.create({

    calendarTheme: {
        calendarBackground: 'transparent',
        textSectionTitleColor: colors.grey,
        selectedDayBackgroundColor: colors.primary,
        selectedDayTextColor: colors.white,
        todayTextColor: colors.primary,
        dayTextColor: colors.text,
        textDisabledColor: colors.grey,
        arrowColor: colors.primary,
        paddingTop: '-20%',
    },

    buttonContainer: {
        marginVertical: 10,
    },

    tasksContainer: {

    },

    

})
