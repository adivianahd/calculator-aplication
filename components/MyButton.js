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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  textButton: {
    color: '#000',
  }
});