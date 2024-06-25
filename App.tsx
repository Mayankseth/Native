/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {
  
  const User = [
    {
      id: 1,
      name:"Mayank"
    },
    {
      id: 2,
      name: "Batman"
    },
    {
      id:3,
      name:"Spiderman"
    },
    {
      id: 4,
      name : "Strange"
    },
    {
      id: 2,
      name: "Strange"
    },
    {
      id:3,
      name:"Batman"
    },
    {
      id: 4,
      name : "Jmkkh"
    },
    {
      id: 2,
      name: "Ssm"
    },
    {
      id:3,
      name:"Ap"
    },
    {
      id: 4,
      name : "Jah"
    },
    {
      id: 2,
      name: "Sam"
    },
    {
      id:3,
      name:"Ap"
    },
    {
      id: 4,
      name : "Jah"
    }

  ]
  return (
   <View>

    <Text style={{fontSize:30}}> Map List</Text>
    <ScrollView style={{marginBottom:50}}> 
    {
      User.map((item)=><Text style={styles.item}>{item.name}</Text>)
    }
    </ScrollView>
    
   
   </View>
  );
};

const styles = StyleSheet.create({
  item:{
    fontSize:25,
    color:"blue",
    borderWidth:2,
    borderColor:"black",
    backgroundColor:"yellow",
    margin:10,
    padding:10
  }
})


export default App;
