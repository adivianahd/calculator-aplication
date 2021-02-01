import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyText from './MyText';

export default (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.numbersContainer}>
        <MyText style={styles.textScreen}>
          {props.num1}
        </MyText>
        <MyText style={styles.textScreen}>
          {props.num2}
        </MyText>
        <MyText style={styles.textScreen}>
          {props.result}
        </MyText>
      </View>
      <View style={styles.operatorContainer}>
        <MyText style={styles.operator}>
          {props.op}
        </MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1.4,
    flexDirection: 'row',
    backgroundColor: '#000',
  },

  numbersContainer: {
    flex: 2,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    backgroundColor: "#000",
  },

  textScreen: {
    color: '#fff',
    fontSize: 70,
  },

  operator: {
    color: '#f7b260',
    fontSize: 80,
  },

  operatorContainer: {
    flex: .7,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});