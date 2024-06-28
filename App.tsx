/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();


function App(): React.JSX.Element {

  const [data,setData] = useState(undefined)

  const getApiData = async()=>{
    const url= "https://jsonplaceholder.typicode.com/posts/1";
    let response = await fetch(url);
    response = await response.json();
    setData(response)

  }
  useEffect(()=>{
    getApiData();
  },[])
 
  return (
   <View>
    <Text style={{fontSize:25}}>Api call</Text>
    {
    data? <View>
    <Text style={{fontSize:25}}>{data.title}</Text>
      </View>:null
   }
   </View>
   
  );
};
const Login = () =>{
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
    <Text style={{fontSize:25}}>Login</Text>
  </View>
  )
}

const SignUp = () =>{
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text style={{fontSize:25}}>SignUp</Text>
    </View>
  )
}


export default App;
