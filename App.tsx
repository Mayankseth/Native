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
  
  function testName(){
    setName("Mayank Seth")
  }
  return (
   <View>
    <Text style={{fontSize:30}}> {name}</Text>
    <Button title='Press Here' onPress={testName} color={'black'} />
   </View>
  );
};



export default App;
