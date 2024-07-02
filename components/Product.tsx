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
  Image,
 
  View,
} from 'react-native';



function Product(props): React.JSX.Element {
 
    const item = props.item;
  return (
    
      <View style={{alignItems:"center", borderBottomColor:"purple", borderBottomWidth:2, padding:10}}>
          <Text style={{fontSize:25}}>{item.name}</Text>
          <Text style={{fontSize:25}}>{item.color}</Text>
          <Text style={{fontSize:25}}>{item.price}</Text>
          <Image style={{height:150, width:150}} source={{uri:item.image}}/>
          <Button title='Add to Cart'/>
    </View>
  );
};



export default Product;