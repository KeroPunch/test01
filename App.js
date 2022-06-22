import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import stySheet from './components/stySheet';
import Logo from './components/Logo';


const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.title,styles.warning]}>Hello React Native</Text> */}
      {/* <Logo /> */}
      <stySheet/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 20,
  },
  warning: {
    color: 'red'
  }
});
