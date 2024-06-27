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
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {

  const [hide,setHide] = useState(false)
  const [barstatus,setBarStatus] = useState("default");
  return (
   <View style={styles.main}>
      <StatusBar
        backgroundColor="purple"
         barStyle='light-content'
         hidden={hide}

        />
        <Button title='Toggle status bar' onPress={()=> setHide(!hide)}/>
        <Button title='Bar status' onPress={()=> setBarStatus('dark-content')}/>

   </View>
  );
};
const styles = StyleSheet.create({
 main:{
  flex:1,
  justifyContent:"center"
 }
 
})




export default App;
