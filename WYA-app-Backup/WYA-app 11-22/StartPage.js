import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
      //change the color the background

    containter: {

        height: 200,
        width: 370,
        borderRadius: 10,
        alignContent: 'center',
        backgroundColor: '#FFCF99',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 70,
        fontWeight: "bold"
      },
      buttons : {

        backgroundColor: '#6d91d9',

        borderRadius: 30,
        height: 50,
        width: 200,
        marginTop: 10,   
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText : {
        fontSize: 20,
        color: "white",
        setButtonText: "white",
        fontWeight: "bold",
      },
      
});

const StartPage = () => {

    const [buttonText, setButtonText] = useState("Get Started");


    return(
        <View style={styles.containter} id="divStartPage">

        {/* <Button color= "pink" title= "Get Started" width="200"></Button> */}
        <TouchableOpacity style={styles.buttons}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        
        </View>


    )
}

export default StartPage;