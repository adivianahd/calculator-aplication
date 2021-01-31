import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MyText from './MyText';

export default (props) => {
  return (
    <TouchableOpacity
      style={[styles.myButton, props.style]}
      onPress={props.onPress}
    >
      <MyText style={styles.textButton}>{props.children}</MyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  myButton: {
    borderRadius: 50,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    color: '#000',
  }
});