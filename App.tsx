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
       />
        <stack.Screen name='Home' component={Home}/>
    </stack.Navigator>

   </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center", }}>
    <Text style={{fontSize:25}}>Home Screen</Text>
  </View>
  )
}

const Login = (props) => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center", }}>
    <Text style={{fontSize:25, marginBottom:10}}>Login Screen</Text>
    <Button title='Go to Home Page' onPress={()=>props.navigation.navigate("Home")}/>
  </View>
  )
}




export default App;
