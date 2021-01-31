import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyText from './MyText';

export default (props) => {
  return (
    <View style={styles.screen}>
      <MyText style={styles.textScreen}>
        {props.children}
      </MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1.4,
    flexDirection: 'column-reverse',
    backgroundColor: '#000',
  },

  textScreen: {
    color: '#fff',
  }
});