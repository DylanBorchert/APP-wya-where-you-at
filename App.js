import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomePage from './WYA-app/HomePage';
import LoginPage from './WYA-app/LoginPage';
import Friendlist from './WYA-app/FriendlistPage';




export default function App() {

  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="FriendList" component={Friendlist} />
      </Stack.Navigator> 
  </NavigationContainer>
  );
};