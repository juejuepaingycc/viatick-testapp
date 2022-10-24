import React, {useEffect, useContext} from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import LandingStackNavigator from './stack/LandingStackNavigator';
import HomeStackNavigator from './stack/HomeStackNavigator';
import { Context } from '../context/Provider';

const Stack = createStackNavigator();

const AppNavigator = () => {

    SplashScreen.hide();
    const { landed } = useContext(Context)

    useEffect(() => {
        LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
        LogBox.ignoreAllLogs();//Ignore all log notifications
    }, [])

    if (landed)
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen 
                        name="HomeStack" 
                        component={HomeStackNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        )

     return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen 
                    name="LandingStack" 
                    component={LandingStackNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppNavigator;