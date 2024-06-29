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
  const [name,setName] = useState()
  const [age,setAge] = useState()
  const [email,setEmail] = useState()

  const saveData = async ()=>{
    const url="http://10.0.2.2:3000/users"
    let result = await fetch(url, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({name,age,email})
    })

    result=await result.json();
    if(result){
      console.warn("data entered")
    }

  }

  return (
   <View>
    <Text style={{fontSize:20}}>Call json server with Input</Text>
    <TextInput  placeholder='Enter Name' style={styles.input} value={name} onChangeText={(text)=> setName(text)}/>
    <TextInput  placeholder='Enter Age' style={styles.input} value={age} onChangeText={(text)=> setAge(text)}/>
    <TextInput  placeholder='Enter EMail' style={styles.input} value={email} onChangeText={(text)=> setEmail(text)}/>
    <Button title='Save Data' onPress={saveData}/>

   
   </View>
   
  );
};

const styles = StyleSheet.create({
  input:{
    borderColor:"blue",
    borderWidth:2,
    margin:10
  }
})



export default App;
