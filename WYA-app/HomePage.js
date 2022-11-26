import { View, Button, StyleSheet, Text} from "react-native";
import Header from "./Header";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomePage = ({ navigation }) => {
    
  const pressHandler = () => {
    navigation.navigate('Login');
  }

  
  const [titleText, setTitleText] = useState("W Y A");
  const bodyText = "WHERE YOU AT?";
  const [buttonText, setButtonText] = useState("Start");
    return (          
      <View style={styles.page}>
        
        <View style={styles.mainTextGroup}>
          <Text style={styles.titleText} >{titleText}</Text>
          <Text style={styles.bodyText}>{bodyText}</Text>
        </View>
        <TouchableOpacity style={styles.buttons} onPress={pressHandler}>
        <Text style={styles.buttonText} >{buttonText}</Text>
        </TouchableOpacity>
        {/* <Header styles= {{width:400, height:400}}  /> */}
        {/* <Button title='Start' onPress={pressHandler}></Button> */}
      </View>
    )

}


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


export default HomePage;
