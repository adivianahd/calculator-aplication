import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyButton from './MyButton';

export default () => {
  return (
    <View style={styles.keyboard}>
      <MyButton>1</MyButton>
      <MyButton>2</MyButton>
      <MyButton>3</MyButton>
      <MyButton>4</MyButton>
      <MyButton>5</MyButton>
      <MyButton>6</MyButton>
      <MyButton>7</MyButton>
      <MyButton>8</MyButton>
      <MyButton>9</MyButton>
      <MyButton>0</MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#0dd',
  }
});