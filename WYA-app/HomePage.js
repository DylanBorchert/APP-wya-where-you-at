import { View, Button, StyleSheet} from "react-native";
import Top from "./Top";

const HomePage = ({ navigation }) => {
    
  const pressHandler = () => {
    navigation.navigate('FriendList');
  }


    return (
    
      <View>
        <Top styles= {{width:400, height:400}}  />
        <Button title='Start' onPress={pressHandler}></Button>
      </View>
    )

}



export default HomePage;