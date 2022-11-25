import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styleSheet } from 'react-native';
import { useState } from 'react';


import StartPage from './WYA-app/StartPage';
import LoginPage from './WYA-app/LoginPage';
import SignUpPage from './WYA-app/SignUpPage';
export default function App() {
  const [titleText, setTitleText] = useState("W Y A");
  const bodyText = "WHERE YOU AT?";
  return (
  
    <View style={styles.page}>
      <View style={styles.mainTextGroup}>
        <Text style={styles.titleText}>{titleText}</Text>
        <Text style={styles.bodyText}>{bodyText}</Text>
      </View>    
      <SignUpPage style= {styles.content} /> 
    </View>
  );
}
const baseColour = "#6d91d9";
const styles = StyleSheet.create({

  titleText : {
    fontSize: 100,
    fontWeight: "bold",
    color: "#F5F5F5",
    marginBottom: 20,
    
  },
  bodyText : {
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
}
});
