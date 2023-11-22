import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { ModalComponentStyles } from "./ModalComponentStyles";
import { CustomButton } from "../CustomButton/CustomButton";
import colors from "../../styles/colors";
import { TouchableWithoutFeedback } from "react-native";
import { FilterButton } from "../FilterButton/FilterButton";
import TextInputDefault from "../../components/TextInputDefault/TextInputDefault";
import { TaskType } from "../../data/TaskType";
import { getPetsByOwner } from "../../services/utils";
import UserSessionContext from "../../services/UserSessionContext.js";
import Card from "../../components/Card/Card";
import { PickPetModal } from "./PickPetModal.js";

export const NewTrainingModal = ({ visible, handleModal, plan }) => {
  const { user } = useContext(UserSessionContext);
  const [modalFilterType, setType] = useState("Plan");
  const [petSelected, setPetSelected] = useState(0);
  const [pets, setPets] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    id: "",
    text: "",
    type:
      plan && (plan.type === "Tricks" ? TaskType.TRICKS : TaskType.COACHING),
    time: "10:30",
    date: "",
    petId: petSelected,
    owners: ["admin"],
    done: false,
    trainingPlanId: plan && plan.id,
    info: { periodicity: 1 },
  });

  const setFilterType = (type) => {
    setType(type);
  };

  const handlePress = () => {
    handleModal(false);
  };

  const cardPressHandler = (pet) => {
    setPetSelected(pet);
  };

  useEffect(() => {
    setPets(getPetsByOwner(user));
  }, []);

  var stepsCounter = 1;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        handleModal(false);
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          handleModal(false);
        }}
      >
        <View style={ModalComponentStyles.overlay}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              ...ModalComponentStyles.container,
              ...globalStyles.shadow,
            }}
          >
            <View
              style={{
                ...ModalComponentStyles.titleContainer,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...globalStyles.subtitleText,
                  ...ModalComponentStyles.title,
                  width: "75%",
                }}
              >
                {plan && plan.title}
              </Text>
              <View
                style={{
                  height: 100,
                  width: 70,
                }}
              >
                <Image
                  style={ModalComponentStyles.newTrainingModalImage}
                  source={{
                    uri: plan && plan.imageUrl,
                  }}
                />
              </View>
            </View>
            <View style={ModalComponentStyles.filtersView}>
              <FilterButton
                name={"Plan"}
                onPressFunction={() => setFilterType("Plan")}
                isDarkGrey={modalFilterType === "Plan"}
                buttonHeight={30}
              />
              <FilterButton
                name={"Schedule"}
                onPressFunction={() => setFilterType("Schedule")}
                isDarkGrey={modalFilterType === "Schedule"}
                buttonHeight={30}
              />
              <FilterButton
                name={"Pet"}
                onPressFunction={() => setFilterType("Pet")}
                isDarkGrey={modalFilterType === "Pet"}
                buttonHeight={30}
              />
            </View>
            {modalFilterType === "Plan" && (
              <>
                <ScrollView
                  style={ModalComponentStyles.newTrainingPlanModal}
                  showsVerticalScrollIndicator={false}
                >
                  {modalFilterType === "Plan" &&
                    plan &&
                    plan.steps.map((step) => {
                      return (
                        <Text>
                          {stepsCounter++}. {step}
                        </Text>
                      );
                    })}
                </ScrollView>
                <View style={{ marginTop: 10, width: 100 }}>
                  <CustomButton
                    title={"Next"}
                    onPressFunction={() => setType("Schedule")}
                    color={colors.primary}
                  />
                </View>
              </>
            )}
            {modalFilterType === "Schedule" && plan && (
              <>
                <View style={ModalComponentStyles.textInputsView}>
                  <TextInputDefault
                    label={"Starting Date   *"}
                    setFunction={(value) =>
                      setNewSchedule({ ...newSchedule, date: value })
                    }
                  />
                  <TextInputDefault
                    label={"Time   *"}
                    setFunction={(value) =>
                      setNewSchedule({ ...newSchedule, time: value })
                    }
                    value={newSchedule.time}
                  />
                  <TextInputDefault
                    label={"Periodicity"}
                    setFunction={(value) =>
                      setNewSchedule({
                        ...newSchedule,
                        info: { periodicity: value },
                      })
                    }
                    value={1}
                  />
                </View>
                <View style={{ width: 100 }}>
                  <CustomButton
                    title={"Next"}
                    onPressFunction={() => setType("Pet")}
                    color={colors.primary}
                  />
                </View>
              </>
            )}
            {modalFilterType === "Pet" && plan && (
              <>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  removeClippedSubviews={true}
                  style={ModalComponentStyles.petsScrollView}
                >
                  <View style={ModalComponentStyles.petsView}>
                    {pets &&
                      pets.map(
                        (pet) =>
                          pet && (
                            <Card
                              key={pet && pet.id}
                              item={pet && pet}
                              pressHandler={cardPressHandler}
                              styleCard={{ width: 70, height: 80 }}
                              styleImage={{ width: 70, height: 60 }}
                            />
                          )
                      )}
                  </View>
                </ScrollView>
                <View style={{ width: 100 }}>
                  <CustomButton
                    title={"Create"}
                    onPressFunction={handlePress}
                    color={colors.primary}
                  />
                </View>
              </>
            )}
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
