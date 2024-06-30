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
import { Colors } from 'react-native/Libraries/NewAppScreen';



function App(): React.JSX.Element {
  const input = useRef();

  const updateInput=()=>{
    input.current.focus();
    input.current.setNativeProps({
      fontSize:25,
      color:"red"
    })
  }

  return (
    <View style={styles.container}>
     <TextInput ref={input} placeholder='Enter Email' style={styles.input}/>
      <TextInput placeholder='Enter Password' style={styles.input}/>
      <Button title='Change' onPress={updateInput}/>
    </View>
   
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  input:{
    borderColor:"skyblue",
    borderWidth:2,
    margin:10
  }
})




export default App;
