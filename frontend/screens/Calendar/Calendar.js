import React, { useContext, useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import Header from '../../components/Header/Header'
import { Calendar as CustomCalendar } from 'react-native-calendars';
import UserSessionContext from '../../services/UserSessionContext';
import { getCurrentDate } from '../../services/utils';
import { CalendarStyles } from './CalendarStyles';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { ModalComponent } from '../../components/Modal/ModalComponent';
import { SchedulingActions as actions } from '../../data/SchedulingActions';
import TaskItem from '../../components/TaskItem/TaskItem';
import { getTypeColor } from '../../services/utils';
import colors from '../../styles/colors';
import { usersApi } from '../../api';


export const Calendar = ({ navigation }) => {

  const [selected, setSelected] = useState(getCurrentDate());
  const [markedL, setMarkedL] = useState({});
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

    try {
      const allTasks = await usersApi.getUserTasks(user.idU)
      setTasks(allTasks);
    } catch (error) {
      console.log("Error Message: " + error.message)
    }
  }

  const handleScheduleModal = (value) => {
    setScheduleModalVisible(value);
  }

  function setMarkedTasks() {
    let tmp = {};

    // Mark selected date
    tmp[selected] = {
      selected: true,
      disableTouchEvent: true,
      selectedDotColor: 'orange'
    };

    // Select events of the current selected date
    setTasksByDate(tasks?.filter((task) => task.date === selected));

    tasks?.forEach((task) => {
      // Check if the date already has dots assigned
      if (!tmp[task.date]) {
        tmp[task.date] = {};
      }

      // Create an array of dots if it doesn't exist
      if (!tmp[task.date].dots) {
        tmp[task.date].dots = [];
      }

      // Add a new dot to the array for each task
      tmp[task.date].dots.push({
        key: task.id, // unique identifier for the dot
        color: getTypeColor(task.type), // color for the dot based on task type
        selectedDotColor: colors.primary
      });
    });

    setMarkedL(tmp);
  }



  return (
    <SafeAreaView style={globalStyles.container}>

      <Header title={"Calendar"} showProfile style={{ marginBottom: -20 }} />

      <CustomCalendar
        markingType={'multi-dot'}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={markedL}
        theme={CalendarStyles.calendarTheme}
      />

      <View style={CalendarStyles.buttonContainer} >

        <CustomButton title={"Add a task"} onPressFunction={() => { handleScheduleModal(true) }} />
        {/* <NewButton title={"Add a task"} onPressFunction={handleSchedulePopup}/> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={CalendarStyles.tasksContainer}>

        {tasksByDate?.length > 0 ?
          tasksByDate.map(task => {
            return (
              <TaskItem key={task.idT} task={task} />
            )
          })
          :
          <View style={CalendarStyles.infoContainer}>
            <Text style={[globalStyles.text, CalendarStyles.infoText]}> You have nothing scheduled for this day </Text>
          </View>
        }

      </ScrollView>

      <ModalComponent
        navigation={navigation}
        visible={scheduleModalVisible}
        handleModal={handleScheduleModal}
        title={'Scheduling'}
        actions={actions}
        day={selected}
      />

    </SafeAreaView>
  )
}
