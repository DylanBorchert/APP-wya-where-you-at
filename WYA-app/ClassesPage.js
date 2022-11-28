import { StyleSheet, Text, TouchableWithoutFeedback, View, Button, TouchableOpacity, TextInput, ScrollView, Touchable } from 'react-native';
import { useState } from 'react';

const ClassesPage = ({ navigation }) => {

    const [buttonText, setButtonText] = useState("Submit");
    const addClassHandler = () => {
        navigation.navigate('AddClass');
    }

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Classes:</Text>
            </View>
            <View style={styles.classBlock}>
                <Text>Course: COMP 3504 </Text>
                <Text>Name: Programming IV: Software Engineering {"\n"}</Text>
                <View style={styles.informationText}>
                    <Text>Section: 001   </Text>
                    <Text>Type: Lecture   </Text>
                    <Text>Course Code: 45501 {"\n"}</Text>
                </View>

                <Text>Times: T/Th   (4:00PM - 5:20PM)</Text>
                
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
        fontSize: 40,
        fontWeight: "bold",
        color: "#F5F5F5",
        marginBottom: 20,
    },
    buttons: {
        backgroundColor: '#6d91d9',
        height: 50,
        width: 200,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 13,
        backgroundColor: "white",
    },
    buttonText: {
        fontSize: 15,
        setButtonText: "white",
        fontWeight: "bold",
        backgroundColor: "white",
        borderRadius: 13,
    },
    container: {
        backgroundColor: '#6d91d9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    classBlock: {
        backgroundColor: '#FFCF99',
        borderRadius: 13,
        justifyContent: 'space-between',
        padding: 5,
        lineHeight: 5

    },
    informationText: {
        flexDirection: 'row'
    }
});

export default ClassesPage;