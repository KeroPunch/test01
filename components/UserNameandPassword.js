import { StyleSheet,View, Text, TextInput,Button } from 'react-native'
import React,{useState} from 'react'

const UserNameandPassword = () => {
    const[Email,setEmail] = useState('');
    const[Password,setPassword] = useState('');
  
    return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
        value={Email}
        onChangeText = {(Email)=>{setEmail(Email)}}
        style = {styles.textInput}
        placeholder='Email'
      />
      <TextInput
        value={Password}
        onChangeText = {(Password)=>{setPassword(Password)}}
        style = {styles.textInput}
        placeholder='Password'
      />
      <Button
        color='pink'
        title='Submit'
        onPress={()=>alert('Email : ' + Email +'\nPassword : ' + Password)}
      />
    </View>
  )
}

export default UserNameandPassword

const styles = StyleSheet.create({
    textInput:{
        width:250,
        height:45,
        padding:10,
        marginTop:10,
        marginBottom:10,
        borderWidth:0.5,
        backgroundColor:'#e8e8e8'
    },
    
})