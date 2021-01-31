import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyText from './MyText';

export default (props) => {
  return (
    <View style={styles.screen}>
      <MyText>
        {props.children}
      </MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  }
});