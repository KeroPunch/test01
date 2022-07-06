import {Text, View } from 'react-native'
import React from 'react'

const Greeting = ({fname,lname}) => {
  return(
      <view>
          <text>Your First Name is {fname} and Last Name is{lname} </text>
      </view>
  )
}

const MyCustomTextWith = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Greeting fname ='Kritsakorn' lname=' Dechalert' />
      <Greeting fname ='Kanok' lname=' Sae-tang' />
    </View>
  )
}

export default MyCustomTextWith
