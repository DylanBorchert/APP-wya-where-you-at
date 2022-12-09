import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React, { useEffect, useState } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const AddClassesPage = ({ navigation }) => {
    const { state } = React.useContext(AuthContext);

    const [className, setClassName] = useState("");
    const [classSubject, setClassSubject] = useState("");
    const [classCode, setClassCode] = useState("");
    const [classSection, setClassSection] = useState("");
    const [classStartTimeState, setClassStartTime] = useState("");
    const [classEndTimeState, setClassEndTime] = useState("");
    const [classDaysOfWeek, setClassDaysOfWeek] = useState("");
    const [classSemester, setClassSemester] = useState("");
    const [classType, setClassType] = useState("");
    const [classRoom, setClassRoom] = useState("");
    // const [classID, setClassID] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);
    const [alertModalVisible, setAlertModalVisible] = useState(false);

    const [allClasses, setAllClasses] = useState([]);

    const ClassesPageHandler = async () => {
        try {
            let response = await fetch(
                'http://35.226.48.108:8080/api/courses', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "course_subject": classSubject,
                    "course_code": classCode,
                    "course_section": classSection,
                    "name": className,
                    "start_time": classStartTimeState,
                    "end_time": classEndTimeState,
                    "days_of_week": classDaysOfWeek,
                    "semester": classSemester,
                    "course_type": classType,
                    "room": classRoom
                })

            }
            );
            const data = await response.json();
            if (response.status == 200) {
                console.log("Class was successfully added");
                alert("Class was successfully added!");
            }
        } catch (error) {
            console.error("------------" + error);
        }

        try {
            const lastCourseResponse = await fetch("http://35.226.48.108:8080/api/courses_last");
            const json = await lastCourseResponse.json();
            const last_id = json[0].last_id;

            let response = await fetch(
                'http://35.226.48.108:8080/api/schedules',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "email": state.email,
                        "course_id": last_id
                    })

                }
            );
            if (response.status == 200) {
                console.log("Course was successfully linked with user");
            } else {
                console.log(response.status);
            }

        } catch (error) {
            console.error("-------" + error);
        }

        setAlertModalVisible(!alertModalVisible);
    };

    const getClasses = async () => {
        try {
            const response = await fetch("http://35.226.48.108:8080/api/courses");
            const responseJSON = await response.json();
            let courseList = [];
            for (let c of responseJSON) {
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
                courseList.push(course);
            }
            setAllClasses(courseList);
        } catch (error) {
            console.error(error);
        }
    }

    const classTypes = [
        { key: 'LEC', value: 'Lecture' },
        { key: 'TUT', value: 'Tutorial' },
        { key: 'LAB', value: 'Lab' }
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

    useEffect(() => {
        getClasses();
    }, []);

    const displayAllClasses = () => {
        return allClasses.map(c => {
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
                    <TouchableOpacity style={styles.addClassesContainer} onPress={() => addClassHandler(id)}>
                        <Text style={styles.buttonText}>Add Class</Text>
                    </TouchableOpacity>
                </View>

            );
        });
    }

    const addClassHandler = async (id) => {
        try {
            const response = await fetch(`http://35.226.48.108:8080/api/courses/${id}`);
            const responseJSON = await response.json();
            setClassName(responseJSON[0].name);
            setClassSubject(responseJSON[0].course_subject);
            setClassCode(responseJSON[0].course_code);
            setClassSection(responseJSON[0].course_section);
            setClassStartTime(responseJSON[0].start_time);
            setClassEndTime(responseJSON[0].end_time);
            setClassDaysOfWeek(responseJSON[0].days_of_week);
            setClassSemester(responseJSON[0].semester);
            setClassType(responseJSON[0].course_type);
            setClassRoom(responseJSON[0].room);
            ClassesPageHandler();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewContainer}>
                <View>
                    {displayAllClasses()}
                </View>
            </ScrollView>

              


            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                propagateSwipe={true}
            >
                    <View style={styles.modalContainer}>
                <ScrollView >
                    <View>
                        <Text style={styles.label}>Name:</Text>
                        <TextInput style={styles.inputField} placeholderTextColor="#D3D3D3"  onChangeText={newText => setClassName(newText)} placeholder="Name (Ex: Software Engineering)" />
                        <Text style={styles.label}>Subject:</Text>
                        <TextInput style={styles.inputField} placeholderTextColor="#D3D3D3" onChangeText={newText => setClassSubject(newText)} placeholder="Subject (Ex: COMP)" />
                        <Text style={styles.label}>Course Code:</Text>
                        <TextInput style={styles.inputField} placeholderTextColor="#D3D3D3" onChangeText={newText => setClassCode(newText)} placeholder="Course Code (Ex: 3504)" />
                        <Text style={styles.label}>Section:</Text>
                       
                        <TextInput style={styles.inputField} placeholderTextColor="#D3D3D3" onChangeText={newText => setClassSection(newText)} placeholder="Section (Ex: 001)" />
                        <SelectList style={styles.dropdownView} data={classTypes} placeholder='Type of Class' save='key' setSelected={(key) => setClassType(key)} />
                        <Text style={styles.label}>Days of the Week:</Text>
                        
                        <TextInput style={styles.inputField} placeholderTextColor="#D3D3D3" onChangeText={newText => setClassDaysOfWeek(newText)} placeholder="Days of the Week (Ex: M/T/W/TH/F)" />
                        <SelectList style={styles.dropdownView} data={startTime} placeholder='Start Time' save='key' setSelected={(key) => setClassStartTime(key)} />
                        <SelectList style={styles.dropdownView} data={endTime} placeholder='End Time' save='key' setSelected={(key) => setClassEndTime(key)} />
                        <Text style={styles.label}>Semester:</Text>
                        
                        <TextInput style={styles.inputField} placeholderTextColor="#D3D3D3" onChangeText={newText => setClassSemester(newText)} placeholder="Semester (Ex: F2022)" />
                        <Text style={styles.label}>Classroom:</Text>
                        
                        <TextInput style={styles.inputField} placeholderTextColor="#D3D3D3" onChangeText={newText => setClassRoom(newText)} placeholder="Classroom (Ex: E2206)" />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttons} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => ClassesPageHandler}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                    </View>
            </Modal>

            
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.classModalButton}>
                <Text style={styles.buttonText}>Add new Class</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        borderRadius: 30,
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: "white",
        margin: 10
    }, 
    buttonText: {
        fontSize: 15,
        setButtonText: "white",
        fontWeight: "bold",
    },
    label: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },


    inputField: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
        width: 350,
        marginBottom: 20,
        paddingLeft: 20,
        alignContent: 'center',
    },
    buttonContainer: {
        paddingTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:100
    },
    dropdownView: {
        borderRadius: 13,
        marginBottom: 30,
        alignContent: 'stretch',
        color: '#FFFFFF',
        width: 350,
        margin: 20
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6d91d9'
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#F5F5F5",
        marginBottom: 20,
    },
    scrollViewContainer: {
        paddingTop: 30,
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center'
    },
    modalContainer: {
        padding: 15, 
        paddingTop: 50,
        backgroundColor: '#6d91d9',
       
        alignItems: "center",
        height: 900,
        
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
    alert: {
        height: 100,
        width: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        display: 'flex',
    },
    classModalButton: {
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
        paddingTop: 10,
        marginBottom: 70,
        marginTop: 10,
        width: 300
        
    },
    addClassesContainer: {
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
        paddingTop: 10,
        marginTop: 10
        
    }
})

export default AddClassesPage;
