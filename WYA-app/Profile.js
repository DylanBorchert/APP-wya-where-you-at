import { View, Button, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import { ScrollView } from "react-native-gesture-handler";
import tw from '../lib/tailwind';

const Profile = ({ navigation }) => {

  const {state} = React.useContext(AuthContext);
  const [name, setName] = useState('');


  const getName = async () => {
    
    try {
      //get user info from database
      const response = await fetch(`http://35.226.48.108:8080/api/users/${state.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
        //update push token
      var data = await response.json();
      console.log(data);
      setName(data[0]?.fname);

    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {

    getName();


  }, []);
  
  //doing styling with tailwind, to lazy to make a stylesheet
  return (
    <View style={tw`w-full h-full bg-primary p-3`}>
      <View style={tw`bg-white rounded p-3 justify-center`}>
        <View style={tw`m-auto`}>
          <Image style={tw.style('h-20 w-20 rounded-2xl')}source={{uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'}}/>
        </View>
        <View>
          <Text style={tw`text-2xl font-bold`}>{name}</Text>
        </View>
      </View>
      <View style={tw`flex flex-row justify-around pt-4`}>
        <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`}>
          <Text style={tw`text-center`}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`}>
          <Text style={tw`text-center`}>Classes</Text>
        </TouchableOpacity>
      </View>
    </View>
      
  )

}

export default Profile;