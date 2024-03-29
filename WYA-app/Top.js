import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';
import { createNativeWrapper } from 'react-native-gesture-handler';

const Top = () => {

    const [titleText, setTitleText] = useState("W Y A");
    const bodyText = "WHERE YOU AT?";

   return (
    <View style={styles.page}>
    <View style={styles.mainTextGroup}>
      <Text style={styles.titleText}>{titleText}</Text>
      <Text style={styles.bodyText}>{bodyText}</Text>

    </View>
  </View>
   )

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
  width: "auto",
    backgroundColor: '#6d91d9',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
},
content: {
flex: 1,
  alignContent: 'center',
  
}
});

export default Top;