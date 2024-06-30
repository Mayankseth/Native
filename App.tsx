/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

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



function App(): React.JSX.Element {
  const [data,setData] = useState([])
  const [showModal,setShowModal] = useState(false)
  const [selectedUser,setSelecteduser] = useState(undefined)

  const saveData = async ()=>{
   
    const url="http://10.0.2.2:3000/users"
    let result = await fetch(url)

    result=await result.json()
    if(result){
      setData(result)
    }
  }
  const deleteUser = async (id) =>{
    const url="http://10.0.2.2:3000/users"
    // console.warn(`${url}/${id}`)
    let result = await fetch(`${url}/${id}`,{
      method:"DELETE"
    });
    result= await result.json();
    if(result){
      console.warn('User Deleted')
      saveData();
    }
    

  }

  useEffect(()=>{
    saveData();
  },[])

  const updateUser = (data)=>{
    setShowModal(true)
    setSelecteduser(data)

  }

  return (
   <View style={styles.container}>
    <View style={styles.dataWrapper}>
          <View style={{flex:1}}><Text>Name</Text></View>
          <View style={{flex:2}}><Text>Age</Text></View>
          <View style={{flex:2}}><Text>Operations</Text></View>
        
        </View>

    {
      data.length?
        data.map((item)=><View style={styles.dataWrapper}>
          <View style={{flex:1}}><Text>{item.name}</Text></View>
          <View style={{flex:1}}><Text>{item.age}</Text></View>
          <View style={{flex:1}}><Button title='Update' onPress={()=>updateUser(item)}/></View>
          <View style={{flex:1}}><Button title='Delete' onPress={()=>deleteUser(item.id)}/></View>
        </View>)

        :null
    }
    <Modal visible={showModal} transparent={true}>
     <UserModal setShowModal={setShowModal} selectedUser={selectedUser} saveData={saveData}/>
    </Modal>
   </View>
   
  );
};

const UserModal = (props) => {
  const [name,setName] = useState()
  const [age,setAge] = useState()
  const [email,setEmail] = useState()

  useEffect(()=>{
    if(props.selectedUser){
      setName(props.selectedUser.name)
      setAge(props.selectedUser.age.toString())
      setEmail(props.selectedUser.email)

    }

  },[props.selectedUser])

  const updateUser = async()=>{
    const url="http://10.0.2.2:3000/users";
    const id = props.selectedUser.id
    let result = await fetch(`${url}/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,age,email})
    })
    result=await result.json()
    if(result){
    console.warn(result)
    props.saveData();
    props.setShowModal(false);

  }
}
  return (
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)}/>
          <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)}/>
          <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}/>
          <View style={{marginBottom:10}}><Button onPress={updateUser} title='Save'/></View>
          <Button title='Close' onPress={()=>props.setShowModal(false)}/>
        </View>
      </View>
  )


}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  dataWrapper:{
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"orange",
    margin:5,
    padding:10
  },
  centeredView:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  modalView:{
    backgroundColor:"#fff",
    borderRadius:10,
    padding:60,
    shadowColor:"#000",
    shadowOpacity:0.7,
    elevation:5
  },
  input:{
    borderWidth:1,
    borderColor:"skyblue",
    width:300,
    marginBottom:15

  }
})



export default App;
