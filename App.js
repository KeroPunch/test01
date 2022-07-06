import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StySheet from './components/StySheet';
import Logo from './components/Logo';
import LotsOfGreetings from './components/LotsOfGreetings';


const App = () => {
  return (
    <View style={styles.container}>
      <LotsOfGreetings />
    </View>
  )
}

export default App

