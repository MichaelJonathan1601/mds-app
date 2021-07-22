import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/LoginScreens/Login';
import pswChange from '../screens/LoginScreens/PasswordChange';
import Register from '../screens/LoginScreens/Register';
import VerifySMS from '../screens/LoginScreens/VerifySMS';
import Tutorial from '../screens/LoginScreens/Tutorial';

import termos from '../screens/AppScreens/Termos';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="pswChange" component={pswChange} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="VerifySMS" component={VerifySMS} />
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="Termos" component={termos} />
    </Stack.Navigator>
  );
};
export default AuthStack;
