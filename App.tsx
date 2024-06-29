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


function App(): React.JSX.Element {
  const [data,setData]= useState([])
  
  
  const saveApiData = async() =>{
    const data={
      name:"Ap",
      age:"22",
      email:"ap@test"
    }

    const url= "http://10.0.2.2:3000/users"
    let result = await fetch(url ,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    result=result.json();
    console.warn(data)
  } 

  return (
   <View>
    <Text style={{fontSize:20}}>Call json server api</Text>
    <Button title='Save Data' onPress={saveApiData}/>
   
   </View>
   
  );
};



export default App;
