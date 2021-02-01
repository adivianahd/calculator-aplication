import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyText from './MyText';

export default (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.numbersContainer}>
        <MyText style={styles.textScreen1}>
          {props.num1}
        </MyText>
        {props.num2 && 
          <MyText style={styles.textScreen2}>
            {props.num2}
          </MyText>
        }
        <MyText style={styles.textScreen1}>
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
    padding: 25,
    flexDirection: 'row',
  },

  numbersContainer: {
    flex: 2,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },

  textScreen1: {
    color: '#fff',
    fontSize: 70,
  },

  textScreen2: {
    color: '#fff',
    fontSize: 70,
    borderBottomColor: '#87cefa',
    borderBottomWidth: 2,
  },

  operator: {
    color: '#87cefa',
    fontSize: 80,
  },

  operatorContainer: {
    flex: .7,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});