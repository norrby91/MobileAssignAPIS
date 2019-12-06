/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
// import {  ActivityIndicator ,Image, View, Text, StyleSheet } from 'react-native';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator } from 'react-navigation-tabs';


import {Ionicons} from "react-native-vector-icons";


import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import LoadingScreen from './Screens/LoadingScreen';
import RegisterScreen from './Screens/RegisterScreen';
import MapScreen from './Screens/MapScreen';
import Health_SafteyScreen from './Screens/Health_SafteyScreen';

import * as firebase from 'firebase'


     var firebaseConfig = {
    apiKey: "AIzaSyCykw9pWd2uZG8wfUphKqHRCTOVbXC3s-8",
    authDomain: "uuorder-a49e4.firebaseapp.com",
    databaseURL: "https://uuorder-a49e4.firebaseio.com",
    projectId: "uuorder-a49e4",
    storageBucket: "uuorder-a49e4.appspot.com",
    messagingSenderId: "693488632960",
    appId: "1:693488632960:web:23aa8a69c883c69fb39265",
    measurementId: "G-RSJ0W8GS2Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        TabBarIcon: ({ tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}/>
      }
    },
    Health_Saftey: {
      screen: Health_SafteyScreen,
      navigationOptions: {
        TabBarIcon: ({ tintColor}) => <Ionicons name="ios-chatbox" size={24} color={tintColor}/>
      }
    },
    Map: {
    screen: MapScreen,
    navigationOptions: {
      TabBarIcon: ({ tintColor}) => <Ionicons name="ios-add-circle" size={24} color={tintColor}/>
    },
  }
},
{
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#E9446A",
      showLabel: false


    }
  
  }
);
 const authStack = createStackNavigator(
   {
   Login: LoginScreen,
   Register: RegisterScreen
 });

 export default createAppContainer(
  (
    createSwitchNavigator({
    Loading: LoadingScreen,
    App: TabNavigator,
    Auth: authStack
    },
    {
      initalRouteName: "Loading Page"
    }
    )
   )
 );