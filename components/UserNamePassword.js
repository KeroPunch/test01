import { StyleSheet,View, Text, TextInput,Button } from 'react-native'
import React,{useState} from 'react'

const UserNamePassword = () => {
    const[Name,setName] = useState('');
    const[Email,setEmail] = useState('');
    
    return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
        value={Name}
        onChangeText = {(Name)=>{setName(Name)}}
        style = {styles.textInput}
        placeholder='Enter Name'
      />
      <TextInput
        value={Email}
        onChangeText = {(Email)=>{setEmail(Email)}}
        style = {styles.textInput}
        placeholder='Enter Email'
      />
      <Button
        color='pink'
        title='Submit'
        onPress={()=>alert(Name==''? 'Please Enter Name' : Email==''?'Please Enter Email':'Success')}
        
      />
    </View>
  )
}

export default UserNamePassword

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