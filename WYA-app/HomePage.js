import { View, Button } from "react-native";
import Header from "./Header";

const HomePage = ({ navigation }) => {
    
  const pressHandler = () => {
    navigation.navigate('Login');
  }


    return (
    
      <View>
        <Header />
        <Button title='Start' onPress={pressHandler}></Button>
      </View>
    )

}



export default HomePage;