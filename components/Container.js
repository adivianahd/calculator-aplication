import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from './Screen';
import Keyboard from './Keyboard';

export default (props) => {
  return (
    <View style={styles.container}>
      <Screen />
      <Keyboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  }
});