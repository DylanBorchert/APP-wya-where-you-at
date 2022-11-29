import { StyleSheet, Text, TouchableWithoutFeedback, View, Button, TouchableOpacity, TextInput, ScrollView, Touchable } from 'react-native';
import { useEffect, useState } from 'react';

const ClassesPage = ({ navigation }) => {

    const [buttonText, setButtonText] = useState("Submit");
    const [classes, setClasses] = useState([]);

    const addClassHandler = () => {
        navigation.navigate('AddClass');
    }

    const getData = async () => {
        try {
            // const response = await fetch("http://35.226.48.108:8080/api/courses");
            const response = await fetch("http://10.239.21.58:8080/api/course/schedules/mfudg395@mtroyal.ca");
            const json = await response.json();
            setClasses(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    createClassList = () => {
        let classList = [];
        for (let c of classes) {
            classList.push(
                <View>
                    <Text>Name: {c.course_subject} {c.course_code} - {c.name}</Text>
                    <Text>Section: {c.course_section}</Text>
                    <Text>Type: {c.course_type}</Text>
                    <Text>Days of the Week: {c.days_of_week}</Text>
                    <Text>Time: {c.start_time} - {c.end_time}</Text>
                    <Text>Semester: {c.semester}   Room: {c.room}</Text>
                </View>
            );
        }

        return classList;
    };

    return (

        <View>
            <View>
                <Text style={styles.title}>Classes:</Text>
            </View>
            <View>
                {createClassList}
                {/* <Text>Name: COMP 3504 - Programming IV: Software Engineering</Text>
                <Text>Section: 001</Text>
                <Text>Type: Lecture</Text>
                <Text>Days of the Week: T/Th</Text>
                <Text>Time: 4:00PM - 5:20PM</Text>
                <Text>Course Code: 45501</Text> */}
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