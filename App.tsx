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
    
  const [count,setCount] = useState(0);
  const [data,setData] = useState(100);

  // useEffect(()=>{
  //   console.warn(count);
  // }, [count]);

  // useEffect(()=>{
  //   console.warn(data);
  // },[data]);

  return (
   <View>

    <Text style={{fontSize:30}}>{data} UseEffect counter : {count}</Text>
    <Button title='Inc counter' onPress={()=>setCount(count+1)}/>
    <Button title='Inc Data' onPress={()=>setData(data+1)}/>
      <User info={{count,data}}/>
   </View>
  );
};

const User = (props) =>{

  useEffect(()=>{
    console.warn("count activated")
  },[props.info.count])
  useEffect(()=>{
    console.warn("Data activated")
  },[props.info.data])

  return (
    <View>
      <Text style={{fontSize:30}}>counter: {props.info.count}</Text>
      <Text style={{fontSize:30}}>data :{props.info.data} </Text>
    </View>

  )
}



export default App;
