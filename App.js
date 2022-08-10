/* eslint-disable prettier/prettier */

import React from 'react';
import Home from './Screens/Home/Home';
import Inbox from './Screens/Inbox/Inbox';
import Task from './Screens/Task/Task';
import Profile from './Screens/Profile/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Mail from 'react-native-vector-icons/Fontisto'
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{showLabel: false, headerShown: false,tabBarShowLabel:false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon name="home-outline" size={30} color="#4bcc81" />
            ),
          }}
        />
        <Tab.Screen
          name="inbox"
          component={Inbox}
          size={30}
          color="#4bcc81"
          tabBarOptions={{
            tabBarIcon: () => {
               <Mail name="email" size={30} color="#4bcc81"/>;
            },
          }}
        />
         <Tab.Screen
          name="task"
          component={Task}
          size={30}
          color="#4bcc81"
          tabBarOptions={{
            tabBarIcon: () => {
              <Icon name="home-outline" size={30} color="#4bcc81"/>
            },
          }}
        />
         <Tab.Screen
          name="profile"
          component={Profile}
          size={30}
          color="#4bcc81"
          tabBarOptions={{
            tabBarIcon: () => {
              <Icon name="email-outline" size={30} color="#4bcc81" />}
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
