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

  const [errorName , setNameError] = useState(false)
  const [errorAge , setAgeError] = useState(false)
  const [errorEmail , setEmailError] = useState(false)

  const saveData = async ()=>{

    if(!name){
      setNameError(true)
    }
    else{
      setNameError(false)
    }
    if(!age){
      setAgeError(true)
    }
    else{
      setAgeError(false)
    }
    if(!email){
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }
    if(!name || !age || !email){
      return false
    }
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
      {
        errorName? <Text style={{color:"red"}}> Enter valid Text</Text>:null
      }
    <TextInput  placeholder='Enter Age' style={styles.input} value={age} onChangeText={(text)=> setAge(text)}/>
    {
        errorAge? <Text style={{color:"red"}}> Enter valid Age</Text>:null
      }
    <TextInput  placeholder='Enter EMail' style={styles.input} value={email} onChangeText={(text)=> setEmail(text)}/>
    {
        errorEmail? <Text style={{color:"red"}}> Enter valid Email</Text>:null
      }
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
