import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const AddClassesPage = ({navigation}) => {
    const ClassesPageHandler = () => {
        navigation.navigate('Classes');
    }

    return (
        <View>
            <Text>Yeehaw this is the Classes Page</Text>
            <View>
                <TextInput style={styles.inputField} placeholder="Name"/>
            </View>
            <View>
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

const styles = StyleSheet.create ({
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
    }
})

export default AddClassesPage;