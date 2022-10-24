import React from 'react';
import {Easing} from 'react-native';
import {
  createStackNavigator
} from '@react-navigation/stack';

// Screens
import LandingScreen from '../../pages/landing/Landing'
import WelcomeScreen from '../../pages/landing/Welcome'

const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const LandingStackNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        gestureEnabled: false,
        transitionSpec: {
          open: config,
          close: config,
        }
      }}>
      <Stack.Screen
        name="Landing"
        component={LandingScreen} />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};

export default LandingStackNavigator;
