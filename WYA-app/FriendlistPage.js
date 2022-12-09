import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
  Modal,
  ImageBackground,
} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import tw from '../lib/tailwind';



const FriendlistPage = ({navigation}) =>  {
  
    const [friends, setFriends] = useState([]);
    const {state} = React.useContext(AuthContext);
    const [name, setName] = useState('');
    const [clickedItem, setClickedItem] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [itemPic, setItemPic] = useState(0);
    const [userEmail, setUserEmail] = useState("");
    const [schedule, setSchedule] = useState([]);
    const [visible, setVisible] = useState(false);
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

      //getName();
      const unsubscribe = navigation.addListener('focus', () => {
        getUserSchedule();
        fetch(`http://35.226.48.108:8080/api/friends/${state.email}`)
            .then((resp) => resp.json())
            .then(result => {
            setFriends(result);
                
            })
      })
      return unsubscribe;

    }, [navigation]);

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

    const boopFriend = async (friendToken, friendName) => {
      console.log(friendToken);
      if(friendToken === null) {
        alert(`${friendName} has not set up their notifications yet!`);
        return;
      }
      try {
          //new boop can send data and custom messages
          await fetch(`http://35.226.48.108:8080/boop/`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body : JSON.stringify({
              "pushToken": friendToken,
              "title": "Boop!",
              "body": `${name} has booped you!`,
              data: {
                "data": "goes here"
              }
            })
          });
        } catch (err) {
          console.log(err);
        }
    }
    // const goToFriendsProfile = (email) => {
    //   setFriendEmail(email);
    //   console.log(friendEmail)
    //   navigation.navigate('FriendProfile', {friendEmail});
    // }
    const createClassList = () => {
      return schedule.map(c => {
          const id = c[0];
          const name = c[1];
          const code = c[2];
          const subject = c[4];
          const days = c[6];
          const start = c[7];
          const end = c[8];
          const room = c[9];
          return (
              <View key={id} style={styles.classBlock}>   
                  <Text>Name: {subject} {code} - {name}</Text>
                  <Text>Days of the Week: {days}</Text>
                  <Text>Time: {start} - {end}</Text>
                  <Text> Room: {room}</Text>
              </View>
          );
      });
  }

  const showClasses = () =>{
    if(visible) {
      return (
      <View style={styles.page}>
              <ScrollView style={styles.scrollViewContainer} >
              <View >
                  <Text style={styles.title}>Classes:</Text>
              </View>
            {createClassList()}
                  
              </ScrollView>
          </View >
        )

    }


  }

    const getUserSchedule = async () => {
      try {
        if(userEmail){
          const response = await fetch(`http://35.226.48.108:8080/api/schedules/${userEmail}`);
          const responseJSON = await response.json();
          const courses = await fetch("http://35.226.48.108:8080/api/courses");
          const coursesJSON = await courses.json();

          let userSchedule = [];
        
          
              for (let r of responseJSON) {
                  for (let c of coursesJSON) {
                      if (c.id === r.course_id) {
                          let course = [];
                          course.push(c.id);
                          course.push(c.name);
                          course.push(c.course_code);
                          course.push(c.course_section);
                          course.push(c.course_subject);
                          course.push(c.course_type);
                          course.push(c.days_of_week);
                          course.push(c.start_time);
                          course.push(c.end_time);
                          course.push(c.room);
                          course.push(c.semester);
                          userSchedule.push(course);
                      }
                  }
                }


              setSchedule(userSchedule);
          }
      } catch (error) {
          console.error(error);
      }
  };
   


    return (

      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>W Y A</Text>
        </View>
        <View style={styles.containerModal}/>
          <View style={styles.body}>
            <TouchableOpacity style={styles.friendsButton} onPress={addFriendsHandler}>
              <ImageBackground source={require("./images/sprinkles.jpg")} resizeMode="repeat" style={styles.img}>
              <Text style={styles.friendsButtonText}>Add Friends</Text>
              </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.friendsButton} onPress={friendRequestsHandler}>
            <ImageBackground source={require("./images/sprinkles.jpg")} resizeMode="repeat" style={styles.img}>
              <Text style={styles.friendsButtonText}>Friend Requests</Text>
              </ImageBackground>
            </TouchableOpacity>
          <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                    >     
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
                    <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`} onPress={()=>{getUserSchedule(); setVisible(true)}}>
                      <Text style={tw`text-center`}>Classes</Text>
                    </TouchableOpacity>
                  <TouchableOpacity style={tw`h-10 w-32 bg-white rounded-xl flex justify-center`} onPress={() => {setVisible(false); setModalVisible(!modalVisible)}}>
                    <Text style={tw`text-center`}>Close</Text>
                  </TouchableOpacity>
                  </View>
                {/* <View style={styles.page}>
            <ScrollView style={styles.scrollViewContainer} >
            <View>
                <Text style={styles.title}>Classes:</Text>
            </View>
            
                
                    {createClassList()}
                
            </ScrollView>
        </View > */}

      {showClasses()}
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
                  <Pressable key={0}onPress={() => {setModalVisible(true); setItemPic(item.profile_pic); setClickedItem(item); setUserEmail(item.email)}}>
                    <View key={1}style={styles.box}>
                        <Image key={2} style={styles.image} source={data[item.profile_pic].image}/>
                        <Text key={3}style={styles.username}>{item.fname} {"\n"}<Text key={4} style={styles.statusText}>{item.status}</Text></Text>
                        <TouchableOpacity key={5}style={styles.button} onPress={() => boopFriend(item.push_token, item.fname)}>
                         <Text key={6}style={styles.buttonText}>Boop</Text>
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
    //flex:2,
    backgroundColor: '#FFFFFF',
    height: 50,
    //backgroundImage: 
    marginTop: 5,
    marginBottom: 5,
    borderRadius:10,
  },
  img: {
//flex:2,
alignSelf: 'center',
height: 50,
width: 320,
radius: 10,
justifyContent: 'center',
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
  scrollViewContainer: {
    marginTop:10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    height: 450,
    padding: 10,
},
classBlock: {
  backgroundColor: '#FFCF99',
  borderRadius: 20,
  // width: 450,
  padding: 15,
  lineHeight: 5,
  // alignSelf: 'left',
  margin: 15
},
});
