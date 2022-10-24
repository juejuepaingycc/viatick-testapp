import React from 'react';
import { Easing } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import CalendarStackNavigator from './CalendarStackNavigator';
import TabNavigator from '../tab/TabNavigator'
import TemperatureScreen from '../../pages/temperature/Temperature';

const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const HomeStackNavigator = () => {

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
        name="HomeTabs"
        component={TabNavigator} />
      <Stack.Screen
        name="CalendarStack"
        component={CalendarStackNavigator}
      />
      <Stack.Screen
        name="Temperature"
        component={TemperatureScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
