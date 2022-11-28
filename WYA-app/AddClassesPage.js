import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';

const AddClassesPage = ({ navigation }) => {

    const [selected, setSelected] = useState("");

    const ClassesPageHandler = () => {
        navigation.navigate('Classes');
    };

    const classTypes = [
        { key: '1', value: 'Lecture' },
        { key: '2', value: 'Tutorial' },
        { key: '3', value: 'Lab' }
    ];

    const startTime = [
        { key: '08:30:00', value: '8:30 AM' },
        { key: '09:00:00', value: '9:00 AM' },
        { key: '09:30:00', value: '9:30 AM' },
        { key: '10:00:00', value: '10:00 AM' },
        { key: '10:30:00', value: '10:30 AM' },
        { key: '11:00:00', value: '11:00 AM' },
        { key: '11:30:00', value: '11:30 AM' },
        { key: '12:00:00', value: '12:00 PM' },
        { key: '12:30:00', value: '12:30 PM' },
        { key: '13:00:00', value: '1:00 PM' },
        { key: '13:30:00', value: '1:30 PM' },
        { key: '14:00:00', value: '2:00 PM' },
        { key: '14:30:00', value: '2:30 PM' },
        { key: '15:00:00', value: '3:00 PM' },
        { key: '15:30:00', value: '3:30 PM' },
        { key: '16:00:00', value: '4:00 PM' },
        { key: '16:30:00', value: '4:30 PM' },
        { key: '17:00:00', value: '5:00 PM' },
        { key: '17:30:00', value: '5:30 PM' },
        { key: '18:00:00', value: '6:00 PM' },
        { key: '18:30:00', value: '6:30 PM' },
        { key: '19:00:00', value: '7:00 PM' },
        { key: '19:30:00', value: '7:30 PM' },
        { key: '20:00:00', value: '8:00 PM' }
    ];

    const endTime = [
        { key: '09:20:00', value: '9:20 AM' },
        { key: '09:50:00', value: '9:50 AM' },
        { key: '10:20:00', value: '10:20 AM' },
        { key: '10:50:00', value: '10:50 AM' },
        { key: '11:20:00', value: '11:20 AM' },
        { key: '11:50:00', value: '11:50 AM' },
        { key: '12:20:00', value: '12:20 AM' },
        { key: '12:50:00', value: '12:50 PM' },
        { key: '13:20:00', value: '1:20 PM' },
        { key: '13:50:00', value: '1:50 PM' },
        { key: '14:20:00', value: '2:20 PM' },
        { key: '14:50:00', value: '2:50 PM' },
        { key: '15:20:00', value: '3:20 PM' },
        { key: '15:50:00', value: '3:50 PM' },
        { key: '16:20:00', value: '4:20 PM' },
        { key: '16:50:00', value: '4:50 PM' },
        { key: '17:20:00', value: '5:20 PM' },
        { key: '17:50:00', value: '5:50 PM' },
        { key: '18:20:00', value: '6:20 PM' },
        { key: '18:50:00', value: '6:50 PM' },
        { key: '19:20:00', value: '7:20 PM' },
        { key: '19:50:00', value: '7:50 PM' },
        { key: '20:20:00', value: '8:20 PM' },
        { key: '20:50:00', value: '8:50 PM' },
        { key: '21:20:00', value: '9:20 PM' },
        { key: '21:50:00', value: '9:50 PM' }
    ];

    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title}>Add Classes:</Text>
            </View>
            
            <View>
                <TextInput style={styles.inputField} placeholder="Name" />
                <TextInput style={styles.inputField} placeholder="Section" />
                <View style={styles.dropdownView}>
                    <SelectList setSelected={(val) => setSelected(val)} data={classTypes} save="value" placeholder='Type of Class' />
                </View>
                <TextInput style={styles.inputField} placeholder="Days of the Week" />
                <View style={styles.dropdownView}>
                    <SelectList setSelected={(val) => setSelected(val)} data={startTime} save="value" placeholder='Start Time' />
                </View>
                <View style={styles.dropdownView}>
                    <SelectList setSelected={(val) => setSelected(val)} data={endTime} save="value" placeholder='End Time' />
                </View>
                <TextInput style={styles.inputField} placeholder="Course Code" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttons} onPress={ClassesPageHandler}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={ClassesPageHandler}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#6d91d9',
        borderRadius: 30,
        height: 50,
        width: 150,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        setButtonText: "white",
        fontWeight: "bold",
    },
    inputField: {

        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "white",

        borderRadius: 10,
        height: 50,
        width: 350,
        marginBottom: 30,
        paddingLeft: 20,
        alignContent: 'center',
    },
    buttonContainer: {
        paddingTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    dropdownView: {
        borderRadius: 13,
        marginBottom: 30,
        alignContent: 'stretch',
        backgroundColor: "white",
        width: 350
    },
    container: {
        backgroundColor: '#6d91d9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#F5F5F5",
        marginBottom: 20,
    }
})

export default AddClassesPage;
