/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState,useRef } from 'react';

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



function Header(): React.JSX.Element {
 
  return (
    <View >
      <Text style={{fontSize:20, textAlign:"right", padding:10, backgroundColor:"purple"}}>Header</Text>

    </View>
   
  );
};



export default Header;
