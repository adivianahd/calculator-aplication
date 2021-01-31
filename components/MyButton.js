import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MyText from './MyText';

export default (props) => {
  return (
    <TouchableOpacity
      style={styles.myButton}
      onPress={props.onPress}
    >
      <MyText>{props.children}</MyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  myButton: {
    width: 85,
    height: 85,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});