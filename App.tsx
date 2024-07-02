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
  Image,
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
import Header from './components/Header';
import Product from './components/Product';


function App(): React.JSX.Element {
  const products = [
    {
      name:'Samsung Phone',
      price:30000,
      color:'Blue',
      image:'https://cdn-icons-png.freepik.com/256/65/65958.png?semt=ais_hybrid'
    },
    {
      name:'Apple Iphone ',
      price:130000,
      color:'Black',
      image:'https://cdn-icons-png.freepik.com/256/65/65958.png?semt=ais_hybrid'
    },
    {
      name:'Nokia phone',
      price:50000,
      color:'White',
      image:'https://cdn-icons-png.freepik.com/256/65/65958.png?semt=ais_hybrid'
    }
  ]
 
 
  return (
    <View >
      <Header/>
      <ScrollView>
      {
        products.map((item)=><Product item={item}/>)
      }
      </ScrollView>
      
      
    </View>
   
  );
};



export default App;
