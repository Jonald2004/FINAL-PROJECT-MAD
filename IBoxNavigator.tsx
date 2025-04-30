import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

const Stack = createNativeStackNavigator();

const iBoxNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default iBoxNavigator;
