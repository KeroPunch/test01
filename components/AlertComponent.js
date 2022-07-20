import { StyleSheet, Text, View, Button, Alert  } from 'react-native'
import React from 'react'

const AlertComponent = () => {
    const simpleAlertHanler = () => {
        alert('Hello I am Simple Alert from JavaScript')
    }

    const twoOptionAlertHanler =()=>{
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two option alert from React Native',
            [
                {
                    text:'No',
                    onPress: ()=> console.log('No Pressed'),
                    style:'cancel'
                },
                {
                    text:'Yes',
                    onPress: ()=>console.log('Yes Pressed')
                },
            ],
            {cancelable:false}
        )
    }
    return (
    <View style={styles.container}>
      <Button
        title='Simple Alert'
        onPress={simpleAlertHanler}
      />
      <Button
        title='Alert with Two option'
        onPress={twoOptionAlertHanler}
      />
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
      }
})