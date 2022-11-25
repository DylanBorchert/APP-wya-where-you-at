import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import Top from './Top';

const LoginPage = ({ navigation }) => {

  const [titleText, setTitleText] = useState("W Y A");
  const bodyText = "WHERE YOU AT?";

    const [buttonText, setButtonText] = useState("Submit");
    
    const pressHandler = () => {
      navigation.navigate('FriendList');
    }

    const signupHandler = () => {
      navigation.navigate('signup');
    }


    fetch('http://35.226.48.108:8080/api/users ', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "email": "mfudg395@mtroyal.ca"
  })
});
   
let email = "";
let password = "";
    return(
      <View style={styles.page}>
      <View style={styles.mainTextGroup}>
        <Text style={styles.HeaderTitleText}>{titleText}</Text> 
         <Text style={styles.HeaderBodyText}>{bodyText}</Text>
       
        </View>
        <View style={styles.containter} id="divStartPage">
            
            <View style={styles.titleGroup}>
            <Text style={styles.titleText}>Login</Text>
            <Text style={styles.text}>please sign in to continue</Text>
            </View>

            <TextInput style={styles.inputField}
          placeholder="Email" 
          onChangedText={(password = this)}/>
        <TextInput style={styles.inputField}
          secureTextEntry={true}
          placeholder="Password"
        />

        <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText} onPress={pressHandler}>{buttonText}</Text>
        </TouchableOpacity>
        <View style={styles.textGroup}>
          <Text style={styles.text}> New User? Sign up </Text>
          <TouchableOpacity onPress={signupHandler}><Text style={styles.text2}>here</Text></TouchableOpacity>
        </View>
        </View>
        </View>

    )
}


const styles = StyleSheet.create({
  //change the color the background



  HeaderTitleText : {
    fontSize: 100,
    fontWeight: "bold",
    color: "#F5F5F5",
    marginBottom: 20,
    
  },
  HeaderBodyText : {
    fontSize: 25,
    fontWeight: "bold",
    color: "#EBEBEB",
  },
  mainTextGroup : {
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 100,
  },

page: {
  flex: 1,
    backgroundColor: '#6d91d9',
    justifyContent: 'center',
    alignItems: 'center',
},
content: {
flex: 1,
  alignContent: 'center',
  
},












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


export default LoginPage;
