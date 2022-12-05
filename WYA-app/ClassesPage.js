import { StyleSheet, Text, TouchableWithoutFeedback, View, Button, TouchableOpacity, TextInput, ScrollView, Touchable } from 'react-native';
import { useEffect, useState } from 'react';

const ClassesPage = ({ navigation }) => {

    const [schedule, setSchedule] = useState([]);

    const addClassHandler = () => {
        navigation.navigate('AddClass');
    }

    const getUserSchedule = async () => {
        try {
            const response = await fetch("http://35.226.48.108:8080/api/schedules/mfudg395@mtroyal.ca");
            const responseJSON = await response.json();
            const courses = await fetch("http://35.226.48.108:8080/api/courses");
            const coursesJSON = await courses.json();

            let userSchedule = [];

            for (let r of responseJSON) {
                for (let c of coursesJSON) {
                    if (c.id === r.course_id) {
                        let course = [];
                        course.push(c.id);
                        course.push(c.name);
                        course.push(c.course_code);
                        course.push(c.course_section);
                        course.push(c.course_subject);
                        course.push(c.course_type);
                        course.push(c.days_of_week);
                        course.push(c.start_time);
                        course.push(c.end_time);
                        course.push(c.room);
                        course.push(c.semester);
                        userSchedule.push(course);
                    }
                }
            }
            setSchedule(userSchedule);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUserSchedule();
    }, []);

    createClassList = () => {
        return schedule.map(c => {
            const id = c[0];
            const name = c[1];
            const code = c[2];
            const section = c[3];
            const subject = c[4];
            const type = c[5];
            const days = c[6];
            const start = c[7];
            const end = c[8];
            const room = c[9];
            const semester = c[10];
            return (
                <View key={id} style={styles.classBlock}>
                    <Text>Name: {subject} {code} - {name}</Text>
                    <Text>Section: {section}</Text>
                    <Text>Type: {type}</Text>
                    <Text>Days of the Week: {days}</Text>
                    <Text>Time: {start} - {end}</Text>
                    <Text>Semester: {semester}   Room: {room}</Text>
                </View>

            );
        });
    }

    return (

        <View style={styles.page}>
            <ScrollView style={styles.scrollViewContainer}>
            <View>
                <Text style={styles.title}>Classes:</Text>
            </View>
            
                <View>
                    {this.createClassList()}
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttons} onPress={addClassHandler}>
                    <Text style={styles.buttonText}>Add Class(es)</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        paddingBottom: 40,
        alignItems: 'center',
        color: 'white',
    },
    buttons: {
        backgroundColor: '#ABCCBA',
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
    },
    classBlock: {
        backgroundColor: '#FFCF99',
        borderRadius: 20,
        width: 350,
        padding: 15,
        lineHeight: 5,
        alignSelf: 'center',
        margin: 15
    },
    scrollViewContainer: {
        borderRadius: 10,
        backgroundColor: '#6d91d9',
        height: 600,
        padding: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        borderRadius: 15,
    },
    page: {
        backgroundColor: '#6d91d9',

    }

});

export default ClassesPage;