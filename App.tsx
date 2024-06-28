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
  const [data,setData] = useState([]);
  const getApiData = async () =>{
    const url="https://jsonplaceholder.typicode.com/posts"
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  
  useEffect(()=>{
    getApiData();
  },[])
 
  return (
   <ScrollView>
      <Text style={{fontSize:20}}>List call using api</Text>
      {
        data.length?
        data.map((item)=>
          <View style={{padding:10, borderBottomColor:"#ccc", borderBottomWidth:2}}>
            <Text style={{fontSize:15, backgroundColor:"#ccc"}}>Id: {item.id}</Text>
            <Text style={{fontSize:15}}>Title: {item.title}</Text>
            <Text style={{fontSize:15}}>Body: {item.body}</Text>
          </View>
        ):
        null
      }
   </ScrollView>
   
  );
};



export default App;
