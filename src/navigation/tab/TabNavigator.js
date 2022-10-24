import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import CustomTabBar from './CustomTabBar';
import HomePage from '../../pages/home/Home';

// Icons
import Home from '../../assets/icons/Home';
import Analysis from '../../assets/icons/Analysis';
import Menu from '../../assets/icons/Menu';
import ProfileAvatar from '../../components/ProfileAvatar';
import AddMenu from '../../components/AddMenu';

const Tab = createMaterialTopTabNavigator()

function HomeTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => (<CustomTabBar {...props}/>)}
            screenOptions={{
                swipeEnabled:false
            }}
            tabBarPosition='bottom'>
            <Tab.Screen 
                name="Home" 
                component={HomePage}
                options={{
                    tabBarIcon: (focused) => (
                        <View>
                            <Home />
                            <View style={{
                                position: 'absolute',
                                width: 3,
                                height: 2,
                                backgroundColor: '#000',
                                bottom: -2,
                                borderRadius: 2,
                                alignSelf: 'center'
                            }} />
                        </View>
                    )
                }}
                 />
            <Tab.Screen 
                name="Menu" 
                component={HomePage}
                options={{
                    tabBarIcon: (focused) => (
                        <Menu />
                    ),
                }} />
            <Tab.Screen 
                name="Add" 
                component={HomePage}
                options={{
                    tabBarIcon: (focused) => (
                        <AddMenu />
                    ),
                }} />
            <Tab.Screen 
                name="Analysis" 
                component={HomePage}
                options={{
                    tabBarIcon: (focused) => (
                        <Analysis />
                    ),
                }} />
            <Tab.Screen 
                name="Profile" 
                component={HomePage}
                options={{
                    tabBarIcon: (focused) => (
                        <ProfileAvatar />
                    ),
                }} />
          
        </Tab.Navigator>
    );
}

export default HomeTabs;