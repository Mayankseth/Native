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
  SectionList,
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
      name:"Mayank",
      data: ["php", "React" ,"Angular"]
    },
    {
      id:53,
      name:"Spiderman",
      data:["C","C++","python"]
    },
    {
      id: 64,
      name : "Strange",
      data:["Java","JS","html"]
    },
    {
      id:83,
      name:"Batman",
      data:["html","css","Js"]
    }
  ]
  return (
   <View>

    <Text style={{fontSize:30}}> Component in loop with flatlist</Text>
    <SectionList
      sections={User}
      renderItem={({item})=><Text style={{fontSize:20, marginLeft:20}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=><Text style={{fontSize:20, color:"red"}}>{name}</Text>}/>
    
   </View>
  );
};

const UserData = (props) => {
  const item=props.item;
  return (
   <View style={styles.box}>
     <Text style={styles.item}>{item.name}</Text>
     <Text style={styles.item}>{item.email}</Text>
   </View>

  )
}

const styles = StyleSheet.create({
  item:{
    fontSize:20,
    color:"purple",
    margin:5,
    flex:1
  },
  box:{
    flexDirection:"row",
    borderColor:"black",
    borderWidth:2,
    marginBottom:10

  }
})


export default App;
