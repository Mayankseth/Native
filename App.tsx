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

  const [show,setShow] = useState(false)

  return (
   <View style={styles.main}>
    <Modal transparent={true} visible={show} animationType='slide'>
      <View style={styles.centered}>
        <View style={styles.modalview}>
          <Text style={styles.modalText}>Hello There!!</Text>
          <Button title='close' onPress={()=> setShow(false)}/>
        </View>
      </View>
    </Modal>
      <View style={styles.button}>
        <Button title='Open' onPress={()=> setShow(true)}/>
      </View>
   </View>
  );
};
const styles = StyleSheet.create({
 main:{
  flex:1
 },
 button:{
  flex:1,
  justifyContent:"flex-end"
 },
 centered:{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
 },
 modalview:{
    backgroundColor:"white",
    padding:30,
    width:300,
    borderRadius:20,
    shadowColor:"black",
    elevation:5,

 },
 modalText:{
  fontSize:30,
  marginBottom:20
 }

})




export default App;
