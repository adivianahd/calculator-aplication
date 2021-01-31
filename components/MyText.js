import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default (props) => {
  return (
    <Text style={styles.text}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#f00',
    fontSize: 50,
  }
});