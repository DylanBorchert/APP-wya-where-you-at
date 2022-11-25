import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import Header from './Header';


const styles = StyleSheet.create({
      //change the color the background

    containter: {

        height: 400,
        width: 370,
        borderRadius: 10,
        alignContent: 'center',
        backgroundColor: '#FFCF99',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 50,
        color: "black",
      },
      buttons : {

        backgroundColor: '#6d91d9',

        borderRadius: 30,
        height: 50,
        width: 200,
        marginTop: 10,   
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonText : {
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
        text: {
          fontSize: 15,
          },        
          text2: {
            fontSize: 15,
            color: "#6d91d9",
            },
            textGroup: {
              flexDirection: 'row',
              marginBottom: 40,
            },
            titleGroup: {
              paddingBottom: 40,
              alignItems: 'center',
            }
      
});

const LoginPage = ({ navigation }) => {

    const [buttonText, setButtonText] = useState("Submit");
    
    const pressHandler = () => {
      navigation.navigate('FriendList');
    }

    return(
        <View style={styles.containter} id="divStartPage">
            <Header />
            <View style={styles.titleGroup}>
            <Text style={styles.titleText}>Login</Text>
            <Text style={styles.text}>please sign in to continue</Text>
            </View>

        <TextInput style={styles.inputField}
          placeholder="Email" />
        <TextInput style={styles.inputField}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText} onPress={pressHandler}>{buttonText}</Text>
        </TouchableOpacity>
        <View style={styles.textGroup}>
          <Text style={styles.text}> New User? Sign up </Text>
          <TouchableOpacity><Text style={styles.text2}>here</Text></TouchableOpacity>
        </View>
        </View>


    )
}

// LoginPage.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//   }).isRequired,
// };


export default LoginPage;