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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {
  
  const [name,setName] = useState("Mayank");
  
  
  return (
   <View>

    <Text style={styles.textBox}> React Native</Text>
    <Text style={styles.textBox}> React Native</Text>
    <Text style={styles.textBox}> React Native</Text>
    
   </View>
  );
};

const styles = StyleSheet.create({
  textBox:{
    color:"blue",
    backgroundColor:"beige",
    fontSize:30,
    padding:10,
    marginBottom:10,
    height:100,
    borderRadius:10,
    textAlign:"center",
    textAlignVertical:"center"
  }
})


export default App;
