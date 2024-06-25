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
  TextInput,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [display, setDisplay] = useState(false)

  const resetFormData = () =>{
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  }
  
  return (
   <View>

    <Text style={{fontSize:30}}> Text Input</Text>
    
    <TextInput
      style={styles.TextInput}
      placeholder='Enter your name here '
      value={name}
      onChangeText={(text)=>setName(text)}
      />
      <TextInput
      style={styles.TextInput}
      placeholder='Enter your email here '
      value={email}
      onChangeText={(text)=>setEmail(text)}
      />
      <TextInput
      style={styles.TextInput}
      placeholder='Enter your Password here '
      value={password}
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      />


    <View style={{marginBottom:10}}>
      <Button title='Print Details' color='green' onPress={()=> setDisplay(true)}/>
    </View>
    <Button title='Press to clear' onPress={resetFormData}/>

    <View>
      {
        display?
        <View>
          <Text style={{fontSize:25}}> User Name is: {name}</Text>
          <Text style={{fontSize:25}}> User Email is: {email}</Text>
          <Text style={{fontSize:25}}> User Password is: {password}</Text>

          </View>: null

      }
        
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  TextInput:{
    fontSize:18,
    color:"blue",
    borderWidth:2,
    borderColor:"blue",
    margin:10
  }
})


export default App;
