import { Text, View } from 'react-native'
import React from 'react'

const Greeting = (props) => {
    return(
        <view style={{alignItems:'center'}}>
            <text>Hello {props.name} {props.date} </text>
        </view>
    )
}
const LotsOfGreetings = () => {
  return (
    <View>
      <Greeting name ='Marry Chrismas ' date='25-Dec-2022' />
      <Greeting name ='Happy New Year ' date='31-Dec-2022' />
      <Greeting name ='Songkarn Festival ' date='13-Apr-2022' />
    </View>
  )
}

export default LotsOfGreetings

