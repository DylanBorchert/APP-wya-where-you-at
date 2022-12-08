import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  Modal,
} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import tw from '../lib/tailwind';

const FriendlistPage = ({navigation}) =>  {
  
    const [friends, setFriends] = useState([]);
    const {state} = React.useContext(AuthContext);
    const [clickedItem, setClickedItem] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [itemPic, setItemPic] = useState(0);
    const [userEmail, setUserEmail] = useState("");

     const data =  [
      {id:0, image: require("./images/bull.png")},
      {id:1, image: require("./images/chick.png")},
      {id:2, image: require("./images/lemur.png")},
      {id:3, image: require("./images/whale.png")},
      {id:4, image: require("./images/zebra.png")},
      {id:5, image: require("./images/koala.png")},
     ];

    useEffect(() => {
         
      fetch(`http://35.226.48.108:8080/api/friends/${state.email}`)
          .then((resp) => resp.json())
          .then(result => {
          setFriends(result);
              
          })

    }, []);

    const addFriendsHandler = () => {
      navigation.navigate('AddFriends');
    }

    const friendRequestsHandler = () => {
      navigation.navigate('FriendRequests');
    }
  
  
    const img = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000";
    const pressHandler = () => {
      //goes to users classes "profile"
      this.props.navigation.navigate('Classes');
    }
    // const goToFriendsProfile = (email) => {
    //   setFriendEmail(email);
    //   console.log(friendEmail)
    //   navigation.navigate('FriendProfile', {friendEmail});
    // }

   


    return (

      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>W Y A</Text>
        </View>
        <View style={styles.containerModal}/>
          <View style={styles.body}>
            <TouchableOpacity style={styles.friendsButton} onPress={addFriendsHandler}>
              <Text style={styles.friendsButtonText}>Add Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.friendsButton} onPress={friendRequestsHandler}>
              <Text style={styles.friendsButtonText}>Friend Requests</Text>
            </TouchableOpacity>
          <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                    >     
                    {console.log(clickedItem)}
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>       
                    <View style={tw`w-full h-full bg-primary p-3`}>
                    <View style={tw`bg-white rounded p-3 justify-center`}>
                    <View style={tw`m-auto`}>
                      <Image style={tw.style('h-20 w-20 rounded-2xl')}source={data[itemPic].image}/>
                    </View>
                    <View>
                      <Text style={tw`text-2xl font-bold`}>{clickedItem.fname} <Text style={tw`text-lg font-normal`}>{clickedItem.status}</Text></Text>
                    </View>
                  </View>
                  <View style={tw`flex flex-row justify-around pt-4`}>
                    <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`}>
                      <Text style={tw`text-center`}>Classes</Text>
                    </TouchableOpacity>
                  <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={tw`text-center`}>Close</Text>
                  </TouchableOpacity>
                  </View>
                </View>
                </View>
                </View>
              
                  </Modal>
            <FlatList 
              style={styles.container} 
              enableEmptySections={true}
              data={friends}
              keyExtractor= {(item) => {
                return item.id;
              }}
              renderItem={({item}) => {
                return (
                  <Pressable onPress={() => {setModalVisible(true); setItemPic(item.profile_pic); setClickedItem(item); setUserEmail(item.email)}}>
                    <View style={styles.box}>
                        <Image style={styles.image} source={data[item.profile_pic].image}/>
                        <Text style={styles.username}>{item.fname} {"\n"}<Text style={styles.statusText}>{item.status}</Text></Text>
                        <TouchableOpacity style={styles.button}>
                         <Text style={styles.buttonText}>Boop</Text>
                        </TouchableOpacity>
                    </View>
                  </Pressable>
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
    width:150
  }, 
  button: {
    // display:'flex',
    alignSelf:'center',
    marginLeft: 50, 
    backgroundColor: '#6d91d9',
    borderRadius:10,
    // justifyContent:'right'
    // justifyContent:'flex-end',

  },
  friendsButton: {
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    marginBottom: 5,
    borderRadius:10,
  },
  friendsButtonText: {
    color: "#000000",
    fontSize:17,
    padding: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize:17,
    padding: 10,
    fontWeight: 'bold',
  },
  statusText: {
    color: "#000000",
    fontSize: 17,
    padding: 10,
    fontWeight: 'bold',
  },
  modalView: {
    width: 350,
    height:700,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  containerModal: {
    
  }
});
