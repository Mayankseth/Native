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
  const [data,setData] = useState([])

  const saveData = async ()=>{
   
    const url="http://10.0.2.2:3000/users"
    let result = await fetch(url)

    result=await result.json()
    if(result){
      setData(result)
    }
  }
  const deleteUser = async (id) =>{
    const url="http://10.0.2.2:3000/users"
    // console.warn(`${url}/${id}`)
    let result = await fetch(`${url}/${id}`,{
      method:"DELETE"
    });
    result= await result.json();
    if(result){
      console.warn('User Deleted')
      saveData();
    }
    

  }

  useEffect(()=>{
    saveData();
  },[])

  return (
   <View style={styles.container}>
    <View style={styles.dataWrapper}>
          <View style={{flex:1}}><Text>Name</Text></View>
          <View style={{flex:2}}><Text>Age</Text></View>
          <View style={{flex:2}}><Text>Operations</Text></View>
        
        </View>

    {
      data.length?
        data.map((item)=><View style={styles.dataWrapper}>
          <View style={{flex:1}}><Text>{item.name}</Text></View>
          <View style={{flex:1}}><Text>{item.age}</Text></View>
          <View style={{flex:1}}><Button title='Update'/></View>
          <View style={{flex:1}}><Button title='Delete' onPress={()=>deleteUser(item.id)}/></View>
        </View>)

        :null
    }
   </View>
   
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  dataWrapper:{
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"orange",
    margin:5,
    padding:10
  }
})



export default App;
