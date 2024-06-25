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
      id:53,
      name:"Spiderman"
    },
    {
      id: 64,
      name : "Strange"
    },
    {
      id: 82,
      name: "Strange"
    },
    {
      id:83,
      name:"Batman"
    }
  ]
  return (
   <View>

    <Text style={{fontSize:30}}> Grid</Text>
    <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
      {
        User.map((item)=><Text style={styles.item}>{item.name}</Text>)
      }
    </View>
      
   
   </View>
  );
};

const styles = StyleSheet.create({
  item:{
    fontSize:25,
    backgroundColor:"blue",
    color:"white",
    borderWidth:2,
    borderColor:"black",
    margin:5,
    padding:5,
    height:120,
    width:120,
    textAlignVertical:"center",
    textAlign:"center"
  }
})


export default App;
