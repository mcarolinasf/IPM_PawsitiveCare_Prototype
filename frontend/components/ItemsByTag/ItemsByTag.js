import React from "react";
import { View } from "react-native";
import { FilterButton } from "../../components/FilterButton/FilterButton";
import TaskItem from "../../components/TaskItem/TaskItem";

export const ItemsByTag = ({ tasks, type, handleTaskPress, handleDelete }) => {
  return (
    <>
      <View style={{ width: 100 }}>
        <FilterButton
          name={type}
          onPressFunction={() => { }}
          isDarkGrey={false}
          buttonHeight={30}
        />
      </View>

      {tasks.map((e) => (
        <TaskItem key={e.idT} task={e} pressHandler={handleTaskPress} deleteHandler={handleDelete} />
      ))}
    </>
  );
};
