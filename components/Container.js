import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from './Screen';
import Keyboard from './Keyboard';

const num = ["9","8","7","6","5","4","3","2","1","C","0"];
const op = ["+","-","*","/","="];


export default (props) => {
  return (
    <View style={styles.container}>
      <Screen/>
      <Keyboard numbers={num} operators={op}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  }
});