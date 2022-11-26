import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomePage from './WYA-app/HomePage';
import SignUpPage from './WYA-app/SignUpPage';
import LoginPage from './WYA-app/LoginPage';
import Friendlist from './WYA-app/FriendlistPage';
import SignUpPage from './WYA-app/SignUpPage';




export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Welcome" component={HomePage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Sign Up" component={SignUpPage} />
          <Stack.Screen name="Friend List" component={Friendlist} />
      </Stack.Navigator> 
  </NavigationContainer>
  );
};
