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
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {

 

  return (
   <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.success]}>Sucess</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.error]}>Error</Text>
      </TouchableHighlight>


   </View>
  );
};
const styles = StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:"#bbb",
    color:"white",
    fontSize:25,
    textAlign:"center",
    padding:10,
    margin:10,
    borderRadius:10,
    shadowColor:"red",
    elevation:10

  },
  success:{
    backgroundColor:"purple"
  },
  error:{
    backgroundColor:"red"
  }

})




export default App;
