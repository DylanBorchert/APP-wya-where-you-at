
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';

import React, { Component } from 'react';
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


export default class FriendlistPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
         {id:1, image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000", username:"johndoe1"},
         {id:2, image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000", username:"johndoe2"},
         {id:3, image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000", username:"johndoe3"},
         {id:4, image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000", username:"johndoe4"},
         {id:5, image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000", username:"johndoe5"},
         {id:6, image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000", username:"johndoe6"},
      ],
    };
  }
  
  
  render() {
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
              data={this.state.data}
              keyExtractor= {(item) => {
                return item.id;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Image style={styles.image} source={{uri: item.image}}/>
                       <Text style={styles.username}>{item.username}</Text>
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
}



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
    marginLeft:10
  }, 
  button: {
    alignSelf:'center',
    marginLeft: 110, 
    backgroundColor: '#6d91d9',
    borderRadius:10
  }, 
  buttonText: {
    color: "#FFFFFF",
    fontSize:17,
    padding: 10,
    fontWeight: 'bold',
    
  }
});
