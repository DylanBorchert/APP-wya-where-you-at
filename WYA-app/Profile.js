import { View, Button, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import { ScrollView } from "react-native-gesture-handler";
import tw from '../lib/tailwind';

const Profile = ({ navigation }) => {

  const {state} = React.useContext(AuthContext);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [profilePic, setProfilePic] = useState(1);
  const profilePicString = 0;
  const data =  [
    {id:0, image: require("./images/bull.png")},
    {id:1, image: require("./images/chick.png")},
    {id:2, image: require("./images/lemur.png")},
    {id:3, image: require("./images/whale.png")},
    {id:4, image: require("./images/zebra.png")},
    {id:5, image: require("./images/koala.png")},
   ];

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
      setName(data[0]?.fname);
      setProfilePic(data[0]?.profile_pic);
      profilePicString = profilePic;
      console.log(profilePic)
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {

    getName();
    getStatus();


  }, []);

  const getStatus = async () => {
    try {
      const response = await fetch(`http://35.226.48.108:8080/api/status/${state.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setStatus(data[0].status);
      
    } catch (err) {
      console.log(err);
    }
  }

  const updateStatusHandler = async () => {
    let newStatus;
    if (status == "On campus")
      newStatus = "Busy"
    else if (status == "Busy")
      newStatus = "On campus"

    try {
      const response = await fetch(`http://35.226.48.108:8080/api/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          status: newStatus,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    setStatus(newStatus);
  }
  
  //doing styling with tailwind, to lazy to make a stylesheet
  return (
    <View style={tw`w-full h-full bg-primary p-3`}>
      <View style={tw`bg-white rounded p-3 justify-center`}>
        <View style={tw`m-auto`}>
          <Image style={tw.style('h-20 w-20 rounded-2xl')}source={data[profilePic].image}/>
        </View>
        <View>
          <Text style={tw`text-2xl font-bold`}>{name} <Text style={tw`text-lg font-normal`}>{status}</Text></Text>
        </View>
      </View>
      <View style={tw`flex flex-row justify-around pt-4`}>
        <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`}>
          <Text style={tw`text-center`}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`} onPress={updateStatusHandler}>
          <Text style={tw`text-center`}>Switch Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`}>
          <Text style={tw`text-center`}>Classes</Text>
        </TouchableOpacity>
      </View>
    </View>
      
  )

}

export default Profile;