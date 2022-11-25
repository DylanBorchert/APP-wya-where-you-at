import { StyleSheet, Text, TouchableWithoutFeedback, View, Button, TouchableOpacity, TextInput, ScrollView, Touchable } from 'react-native';
import { useState } from 'react';

const ClassesPage = ({ navigation }) => {

    const [buttonText, setButtonText] = useState("Submit");
    const addClassHandler = () => {
        navigation.navigate('AddClass');
    }

    return (

        <View>
            <View>
                <Text style={styles.title}>Classes:</Text>
            </View>
            <View>
                <Text>Name: COMP 3504 - Programming IV: Software Engineering</Text>
                <Text>Section: 001</Text>
                <Text>Type: Lecture</Text>
                <Text>Days of the Week: T/Th</Text>
                <Text>Time: 4:00PM - 5:20PM</Text>
                <Text>Course Code: 45501</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttons} onPress={addClassHandler}>
                    <Text style={styles.buttonText}>Add Class(es)</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        paddingBottom: 40,
        alignItems: 'center',
    },
    buttons: {
        backgroundColor: '#6d91d9',
        borderRadius: 30,
        height: 50,
        width: 200,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        setButtonText: "white",
        fontWeight: "bold",
    }

});

export default ClassesPage;