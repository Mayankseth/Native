import { Button, Text, View } from "react-native"

export const Login = (props) => {
    return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center", }}>
      <Text style={{fontSize:25, marginBottom:10}}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={()=>props.navigation.navigate("Home")}/>
    </View>
    )
  }