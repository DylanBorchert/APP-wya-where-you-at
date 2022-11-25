import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import HomePage from './WYA-app/HomePage';
import LoginPage from './WYA-app/LoginPage';
import Friendlist from './WYA-app/FriendlistPage';
import SignUpPage from './WYA-app/SignUpPage';
import ClassesPage from './WYA-app/ClassesPage';
import AddClassesPage from './WYA-app/AddClassesPage';
import { StyleSheet } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <View styles={styles.containter}>
    //   <Text>Hello </Text>
  <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={ClassesPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="signup" component={SignUpPage} />
          <Stack.Screen name="FriendList" component={Friendlist} />
          <Stack.Screen name="Classes" component={ClassesPage} />
          <Stack.Screen name ="AddClass" component={AddClassesPage}/>
      </Stack.Navigator> 
  </NavigationContainer>
  // </s>
  );
};


const styles = StyleSheet.create({

  containter: {
      flex: 1,
      height: 400,
      width: 370,
      borderRadius: 10,
      alignContent: 'center',
      
       alignItems: 'center',
       justifyContent: 'center',
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
