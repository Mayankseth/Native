/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

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



function App(): React.JSX.Element {
  const [data,setData]=useState([])
  
  const searchUser = async(text) =>{
    const url= `http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url)
    result= await result.json();
    if(result){
      setData(result)
    }
  }

  return (
    <View>
      <Text style={{fontSize:25}}>Search with Api</Text>
      <TextInput style={{borderColor:"skyblue", borderWidth:1, margin:10, fontSize:20}} placeholder={"search"}
        onChangeText={(text)=>searchUser(text)}/>
        {
          data.length?
          data.map((item)=>
              <View style={{padding:10, justifyContent:"space-around",flexDirection:"row"}}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                <Text>{item.email}</Text>
              </View>
        ):null
        }
    </View>
   
  );
};





export default App;
