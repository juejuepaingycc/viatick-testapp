import React from 'react';
import {Easing} from 'react-native';
import {
  createStackNavigator
} from '@react-navigation/stack';

// Components
import CalendarScreen from '../../pages/calendar/Calendar';
import CalendarDetailScreen from '../../pages/calendar/CalendarDetail'


const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const CalendarStackNavigator = () => {

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
        name="Calendar"
        component={CalendarScreen} />
      <Stack.Screen
        name="CalendarDetail"
        component={CalendarDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default CalendarStackNavigator;
