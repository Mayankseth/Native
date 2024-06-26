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
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {

 const [sRadio,setsRadio] = useState(0)

  return (
   <View style={styles.main}>
      <TouchableOpacity onPress={()=> setsRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              sRadio===1?<View style={styles.radioBg}></View>:null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setsRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              sRadio===2?<View style={styles.radioBg}></View>:null
            }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
   </View>
  );
};
const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  radioText:{
    fontSize:20
  },
  radio:{
    height:40,
    width:40,
    borderColor:"black",
    borderWidth:2,
    borderRadius:20,
    margin:10
  },
  radioWrapper:{
    flexDirection:"row",
    alignItems:"center"
  },
  radioBg:{
    height:28,
    width:28,
    backgroundColor:"blue",
    borderRadius:20,
    margin:4
  }
  

})




export default App;
