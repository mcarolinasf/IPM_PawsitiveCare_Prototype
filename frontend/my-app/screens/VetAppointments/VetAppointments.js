import React, { useState, useContext, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import Divider from '../../components/Divider'
import Header from '../../components/Header/Header'
import MenuCard from '../../components/MenuCard/MenuCard'
import { globalStyles } from '../../styles/globalStyles'
import UserSessionContext from '../../services/UserSessionContext.js'
import NoteTacker from '../../components/NoteTaker/NoteTacker'
import { PickPetModal } from '../../components/Modal/PickPetModal'
import { dateToString } from '../../services/utils'
import { petsApi, usersApi } from '../../api'
import { EntryType } from '../../data/EntryType'
import { useIsFocused } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';



export const VetAppointments = ({ navigation }) => {

    const { user } = useContext(UserSessionContext);

    const [vetApp, setVetApp] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState({});
    const [selectPetModal, setSelectPetModal] = useState(false)
    const [pet, setPet] = useState(false)
    const isFocused = useIsFocused();


    const addVetAppointment = async (pet) => {

        setSelectedEntry({ ...selectedEntry, idP: pet.idP, ownersIds: pet.ownersIds })


        try {

            const idE = uuidv4();

            const newEntry = {
                idE: idE,
                title: 'Vet App ',
                type: EntryType.VETAPPOINTMENT,
                date: dateToString(new Date()),
                idP: pet.idP,
                ownersIds: pet.ownersIds
            }

            console.log('PeeeeAlgoooooooooooooottt ' + Object.values(newEntry))

            await petsApi.createEntry(pet.idP, newEntry)

            setVetApp([...vetApp, newEntry])
            setSelectedEntry(newEntry)

        } catch (error) {
            console.log("Error Message: " + error.message)
        }

    }

    const handlePetModal = (value) => {
        setSelectPetModal(value)


    }


    const getData = async () => {

        try {
            console.log(user.idU)
            const entries = await usersApi.getUserEntries(user.idU)

            const vetApps = entries.filter((entry) => entry.type === EntryType.VETAPPOINTMENT)

            setVetApp(vetApps);

            if (vetApps.length > 0) {
                setSelectedEntry(vetApps[vetApps.length - 1]);
            }

        } catch (error) {
            console.log("Error Message: " + error.message)
        }

    }
    useEffect(() => {
        getData();
        if (isFocused) { getData(); }
    }, [isFocused, user, navigation]);


    const selectVetApp = (itemId) => {

        if (selectedEntry && selectedEntry.idE === itemId) {
            return;
        }

        const selectedVetApp = vetApp.find((entry) => entry.idE === itemId);

        console.log(itemId)
        console.log(Object.values(selectedVetApp))

        // Update selectedEntry with the selected diary entry
        setSelectedEntry(selectedVetApp);
    }



    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView>
                <Header title={'Vet\nAppointments'} goBack showProfile />
                <ScrollView horizontal={true}>
                    {
                        /* Maybe change direction of list */
                        vetApp.slice().reverse().map((item, index) => (
                            <MenuCard key={item.idE} iconName={'paw'} title={item.title + (vetApp.length - index)} item={item} subtitle={item.date} setFunction={() => selectVetApp(item.idE)} selected={selectedEntry} />
                        ))
                    }
                </ScrollView>
                <Divider />
                <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
                    <CustomButton title={'New entry'} iconName={'plus'} onPressFunction={() => handlePetModal(true)} />
                </View>
                {/* Todo: Add pop up and its functionality */}
                <NoteTacker selectedEntry={selectedEntry} setEntry={setSelectedEntry} />
            </ScrollView>

            <PickPetModal
                navigation={navigation}
                visible={selectPetModal}
                handleModal={handlePetModal}
                title={'Select your pet'}
                setPet={setPet}
                createEntry={addVetAppointment}

            />

        </SafeAreaView>
    )
}