import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Top from './Top';
// import {Form, FormItem} from 'react-native-form-component';

const SignUpPage = () => {

    const [buttonText, setButtonText] = useState("Submit");


    return(
      
        <View style={styles.containter} id="divStartPage">
          <Top />
           <View style={{height: 500}} >
        <ScrollView style={styles.ScrollContainer}>

            <View style={styles.titleGroup}>
            <Text style={styles.titleText}>Sign-Up</Text>
            {/* <Text style={styles.text}>please sign in to continue</Text> */}
            </View>



        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={styles.inputField}
          placeholder="Email" />
                <TextInput style={styles.inputField}
          placeholder="UserName" />
                  <TextInput style={styles.inputField}
          placeholder="firstName" />
        <TextInput style={styles.inputField}
          secureTextEntry={true}
          placeholder="Password"
        />
                <TextInput style={styles.inputField}
          placeholder="phoneNumber" />
                  <TextInput style={styles.inputField}
          placeholder="Email" />

        <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
        </ScrollView>
        </View>
</View>

    )
}

export default SignUpPage;

const styles = StyleSheet.create({
// at some point add a notification to tell the  user we have created their account.
  containter: {
      flex: 1,
      height: 400,
      width: 370,
      borderRadius: 10,
      alignContent: 'center',
      
      // alignItems: 'center',
      // justifyContent: 'center',
  },
  ScrollContainer :{
    borderRadius: 10,
    backgroundColor: '#FFCF99',
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