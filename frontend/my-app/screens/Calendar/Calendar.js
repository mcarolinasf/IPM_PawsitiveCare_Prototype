import React, { useContext, useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Button, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header/Header'
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import { TasksData } from "../../data/TasksData"
import UserSessionContext from '../../services/UserSessionContext';
import { getCurrentDate } from '../../services/utils';
import { CalendarStyles } from './CalendarStyles';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { ModalComponent } from '../../components/Modal/ModalComponent';
import Divider from '../../components/Divider'
import navigationPaths from '../../navigation/navigationPaths';
import { SchedulingActions as actions } from '../../data/SchedulingActions';

export const Calendar = ({navigation}) => {

  const [selected, setSelected] = useState(getCurrentDate());
  const [markedL, setMarked] = useState({});
  const [tasks, setTasks] = useState([])
  const [tasksByDate, setTasksByDate] = useState([])

  const [scheduleModalVisible, setScheduleModalVisible] = useState(false)

  const { user } = useContext(UserSessionContext);



  useEffect(() => {
    setMarkedTasks()
  }, [selected, tasks]);


  useEffect(() => {
    fetchTasks();
    setMarkedTasks()
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  async function fetchTasks() {

    //const response = await getUserEvents({email: emailUser});
    const tasks = Object.values(TasksData); // Convert object values to an array

    // Filter the array by owner
    const filteredByOwner = tasks.filter(task => task.owner === user.email);

    setTasks(filteredByOwner);
  }

  const handleSchedulePopup = () => {
    setScheduleModalVisible(!scheduleModalVisible);
  }


  function setMarkedTasks() {
    let tmp = {}
    tmp[selected] = { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }

    //Select events of the current selected date
    setTasksByDate(tasks?.filter((task) =>
      task.date === selected))

    tasks?.forEach((task) => {
      tmp[task.date] = {
        dotColor: Colors.secondary,
        marked: true
      }
    });

    setMarked(tmp)
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Header title={"Calendar"} showProfile />

        <CustomCalendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={markedL}
          theme={CalendarStyles.calendarTheme}
        />

        <View style={CalendarStyles.buttonContainer} >
          <CustomButton title={"Add a task"} onPressFunction={handleSchedulePopup} />
        </View>
      </ScrollView>

      <ModalComponent
        navigation={navigation}
        visible={scheduleModalVisible}
        onClose={handleSchedulePopup}
        title={'Scheduling'}
        actions={actions}
      />

    </SafeAreaView>
  )
}
