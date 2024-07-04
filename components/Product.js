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

import { ADD_TO_CART } from './redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from './redux/action';


const Product = (props) =>{

    const item = props.item;
    const dispatch = useDispatch();
    const [isAdded,setIsAdded] = useState(false)
    const cartItems = useSelector((state)=>state.reducer)


    const handleaddToCart=(item)=>{
      dispatch(addToCart(item))
    }

    const handleRemovecart=(item)=>{
        dispatch(removeFromCart(item.name))
    }



    useEffect(()=>{
    let result=cartItems.filter((element)=>{
      return element.name===item.name
    });
    if(result.length){
      setIsAdded(true)
    }
    else{
      setIsAdded(false)
    }
    },)
 
 return(

    <View style={{alignItems:"center", borderBottomColor:"orange", borderBottomWidth:2, padding:10, marginBottom:4}}>
      <Text style={{fontSize:20}}>{item.name}</Text>
      <Text style={{fontSize:24}}>{item.price}</Text>
      <Text style={{fontSize:24}}>{item.color}</Text>
      {
        isAdded?
        <Button title='Remove from Cart' onPress={()=>handleaddToCart(item)}/>
        :
        <Button title='add to cart' onPress={()=>handleaddToCart(item)}/>
      }
    </View>


 )
};



export default Product;
