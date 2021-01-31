import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyButton from './MyButton';

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        {props.numbers.map((n, i) => (
          <MyButton
            key={i}
            style={n !== "C" ? styles.number : styles.clearOperator}>
            {n}
          </MyButton>
        )
        )}
      </View>
      <View style={styles.operatorContainer}>
        {props.operators.map((o, i) =>
          <MyButton key={i} style={styles.operator}>{o}</MyButton>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#000',
  },

  numberContainer: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  operatorContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  number: {
    backgroundColor: '#f0f8ff',
    width: 110,
    height: 110,
  },

  operator: {
    backgroundColor: '#87cefa',
    width: 80,
    height: 90,
  },

  clearOperator: {
    backgroundColor: '#ffe4b5',
    width: 220,
    height: 110,
  }
});