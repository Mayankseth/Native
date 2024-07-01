/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState,useRef } from 'react';

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
 
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


function App(): React.JSX.Element {
  const [user,setUser] = useState('')
  const setData = async()=>{
    await AsyncStorage.setItem("name","Ap")
  }
  const getData= async() =>{
    const name = await AsyncStorage.getItem("name")
    setUser(name)
  }
  const removeData = async() =>{
    await AsyncStorage.removeItem("user");
    setUser('')
  }
  return (
    <View style={{marginTop:100, marginLeft:30}}>
      <Text style={{fontSize:25}}> Async Storage | {user}</Text>
      <Button title='Save Data' onPress={setData}/>
      <Button title='Get Data'onPress={getData}/>
      <Button title='Remove' onPress={removeData}/>
    </View>
   
  );
};

const styles=StyleSheet.create({
 
})




export default App;
