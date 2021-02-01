import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from './Screen';
import Keyboard from './Keyboard';

const num = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "C", "0"];
const operators = ["+", "-", "*", "/", "="];

export default () => {

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <View style={styles.container}>
      <Screen
        num1={num1}
        num2={num2}
        op={op}
        result={result} />
      <Keyboard
        numbers={num}
        operators={operators}
        num1={num1}
        num2={num2}
        op={op}
        result={result}
        setNum1={setNum1}
        setNum2={setNum2}
        setOp={setOp}
        setResult={setResult} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  }
});