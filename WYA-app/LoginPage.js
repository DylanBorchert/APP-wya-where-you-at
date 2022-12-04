import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import Top from "./Top";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [buttonText, setButtonText] = useState("Submit");

  const signupHandler = () => {
    navigation.navigate("signup");
  };

  const loginUser = async () => {
    
    try {
      const response = await fetch("http://10.0.0.213:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data[0].status === "success") {
        //navigate to the friendlist page if login successful
        navigation.navigate("FriendList");
      } else {
        alert("Incorrect email or password");
      }
    } catch (error) {
      alert("Incorrect email or password");
    }
    
  };

  return (
    <View style={styles.page}>
      <View style={styles.mainTextGroup}>
        <Text style={styles.HeaderTitleText}>W Y A</Text>
        <Text style={styles.HeaderBodyText}>WHERE YOU AT?</Text>
      </View>
      <View style={styles.containter} id="divStartPage">
        <View style={styles.titleGroup}>
          <Text style={styles.titleText}>Login</Text>
          <Text style={styles.text}>please sign in to continue</Text>
        </View>
        <TextInput
          id={"emailField"}
          style={styles.inputField}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputField}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.buttons} onPress={loginUser}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <View style={styles.textGroup}>
          <Text style={styles.text}> New User? Sign up </Text>
          <TouchableOpacity onPress={signupHandler}>
            <Text style={styles.text2}>here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //change the color the background

  HeaderTitleText: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#F5F5F5",
    marginBottom: 20,
  },
  HeaderBodyText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#EBEBEB",
  },
  mainTextGroup: {
    alignItems: "center",
    alignContent: "center",
    marginBottom: 100,
  },

  page: {
    flex: 1,
    backgroundColor: "#6d91d9",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignContent: "center",
  },

  containter: {
    height: 400,
    width: 370,
    borderRadius: 10,
    alignContent: "center",
    backgroundColor: "#FFCF99",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    color: "black",
  },
  buttons: {
    backgroundColor: "#6d91d9",

    borderRadius: 30,
    height: 50,
    width: 200,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
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
    alignContent: "center",
  },
  text: {
    fontSize: 15,
  },
  text2: {
    fontSize: 15,
    color: "#6d91d9",
  },
  textGroup: {
    flexDirection: "row",
    marginBottom: 40,
  },
  titleGroup: {
    paddingBottom: 40,
    alignItems: "center",
  },
});

export default LoginPage;
