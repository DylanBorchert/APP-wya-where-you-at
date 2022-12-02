
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Banner,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {Context as AuthContext} from '../context/AuthContext';


const FriendlistPage = () =>  {
  
    const [friends, setFriends] = useState([]);
    const {state} = React.useContext(AuthContext);

    useEffect(() => {
         
      fetch(`http://35.226.48.108:8080/api/friends/${state.email}`)
          .then((resp) => resp.json())
          .then(result => {
            // console.log(result);
          setFriends(result);
              
          })

    }, []);

  
  
    const img = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000";
    const pressHandler = () => {
      //goes to users classes "profile"
      this.props.navigation.navigate('Classes');
    }
    return (

      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>W Y A</Text>
          <TouchableHighlight onPress={pressHandler}>
          <Image style={styles.image} source={{uri:img}} /> 
          </TouchableHighlight>
        </View>
          <View style={styles.body}>
            <FlatList 
              style={styles.container} 
              enableEmptySections={true}
              data={friends}
              keyExtractor= {(item) => {
                return item.id;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                        <Image style={styles.image} source={{uri:img}}/>
                        <Text style={styles.username}>{item.fname}</Text>
                        <TouchableOpacity style={styles.button}>
                         <Text style={styles.buttonText}>boop</Text>
                        </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
          </View>
      </View>
      
    );
  
}

export default FriendlistPage;

const styles = StyleSheet.create({
  container: {
    flex:1
  }, 
  banner: {
    backgroundColor:'#5774ad',
    padding: 3,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center', 
    
  }, 
  bannerText: {
    fontSize:30,
    color: "#FFFFFF",
    fontWeight: 'bold'
  }
  ,
  image:{
    borderRadius:45,
    width: 60,
    height: 60,
  },
  body: {
    flex:1,
    padding:30,
    backgroundColor :"#6d91d9",
  },
  box: {
    // display: 'flex',
    padding:5,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#ff9d99",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10,
    width:100
  }, 
  button: {
    // display:'flex',
    alignSelf:'center',
    marginLeft: 100, 
    backgroundColor: '#6d91d9',
    borderRadius:10,
    // justifyContent:'right'
    // justifyContent:'flex-end',

  }, 
  buttonText: {
    color: "#FFFFFF",
    fontSize:17,
    padding: 10,
    fontWeight: 'bold',
    
  }
});
