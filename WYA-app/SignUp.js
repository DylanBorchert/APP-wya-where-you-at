import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import {Context as AuthContext} from '../context/AuthContext';
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import tw from "../lib/tailwind";
// import {Form, FormItem} from 'react-native-form-component';

const SignUp = () => {
  const {state, signup} = useContext(AuthContext);


  const [buttonText, setButtonText] = useState("Submit");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [fname, setFname] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pushtoken, setpushToken] = useState("empty");

  useEffect(() => {

    setpushToken(state.pushtoken);

  }, [email, userName, fname, password, password2, phoneNumber]);



  return (
    <View style={tw`w-full h-full bg-primary p-3`} id="divStartPage">
      <View style={tw``}>
        <Text style={tw`font-bold text-white text-2xl`}>Sign-Up</Text>
        {/* <Text style={styles.text}>please sign in to continue</Text> */}
      </View>
      <View style={tw`py-3 h-full`}>
        <ScrollView style={tw`w-full h-full`}>

          <View style={tw`flex flex-col justify-around m-auto h-full w-full`}>
            <TextInput 
              style={tw`inputField my-3`} 
              placeholder="Email" 
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput 
              style={tw`inputField my-3`} 
              placeholder="User Name" 
              onChangeText={(text) => setUserName(text)}
            />
            <TextInput 
              style={tw`inputField my-3`} 
              placeholder="first Name" 
              onChangeText={(text) => setFname(text)}
            />
            <TextInput
              style={tw`inputField my-3`}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              style={tw`inputField my-3`}
              secureTextEntry={true}
              placeholder="Repeat Password"
              onChangeText={(text) => setPassword2(text)}
            />
            <TextInput 
              style={tw`inputField my-3`} 
              placeholder="Phone Number" 
              onChangeText={(text) => setPhoneNumber(text)}
            />

            <TouchableOpacity 
              style={tw`w-30 rounded-md h-8 m-auto text-center bg-secondary centre-item`}
              onPress={() => {signup({email, password, password2, userName, fname, phoneNumber, pushtoken});}}
            >
              <Text style={tw``}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;

// const styles = StyleSheet.create({
//   // at some point add a notification to tell the  user we have created their account.
//   containter: {
//     flex: 1,
//     height: 400,
//     width: 370,
//     borderRadius: 10,
//     alignContent: "center",

//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   ScrollContainer: {
//     borderRadius: 10,
//     backgroundColor: "#FFCF99",
//   },
//   titleText: {
//     fontSize: 50,
//     color: "black",
//   },
//   buttons: {
//     backgroundColor: "#6d91d9",
//     borderRadius: 30,
//     height: 50,
//     width: 200,
//     marginTop: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: "white",
//     setButtonText: "white",
//     fontWeight: "bold",
//   },
//   inputField: {
//     fontSize: 20,
//     fontWeight: "bold",
//     backgroundColor: "white",

//     borderRadius: 10,
//     height: 50,
//     width: 350,
//     marginBottom: 30,
//     paddingLeft: 20,
//     alignContent: "center",
//   },
//   text: {
//     fontSize: 15,
//   },
//   text2: {
//     fontSize: 15,
//     color: "#6d91d9",
//   },
//   textGroup: {
//     flexDirection: "row",
//     marginBottom: 40,
//   },
//   titleGroup: {
//     paddingBottom: 40,
//     alignItems: "center",
//   },
// });
