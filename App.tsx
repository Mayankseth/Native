/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from './components/Home';
import { Login } from './components/Login';

const stack=createNativeStackNavigator();

function App(): React.JSX.Element {

 
  return (
   <NavigationContainer>

    <stack.Navigator  screenOptions={{
          
          headerStyle:{
            backgroundColor:"purple"
          },
          headerTitleStyle:{
            fontSize:25
          },
          headerTintColor:'white'
        }}>
    <stack.Screen name='Login' component={Login} 
        options={{
          headerTitle:()=><Button title='Left'/>,
          headerRight: ()=> <Header/>
        }}/>
        <stack.Screen name='Home' component={Home}/>
    </stack.Navigator>

   </NavigationContainer>
  );
};

const Header = () => {
  return(
    <Text>Header</Text>
  )
}








export default App;
