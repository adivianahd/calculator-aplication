import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyButton from './MyButton';

export default ({
  numbers,
  operators,
  setNum1,
  setNum2,
  setOp,
  setResult,
  num1,
  num2,
  op,
  result
}
) => {

  const reset = () => {
    setOp(null);
    setResult(null);
    setNum1(null);
    setNum2(null)
  }

  const onChange = (e) => {
    const hasResult = !!result;
    const isANumber = e !== '+' && e !== '-' && e !== '/' && e !== '*' && e !== '=' && e !== 'C';
    
    if (hasResult){ 
     return reset()
    }

    if (isANumber) {
      if (!num1) { setNum1(e) }
      if (num1 && !op) { setNum1(num1 + e) }
      if (num1 && op) { setNum2(e) }
      if (num2 && op !== '=') { setNum2(num2 + e) }
      if (op && !num1) {
        setNum1('0')
        setNum2(e)
      }
    } 
    else {
      if (e !== 'C' && e !== "=") { setOp(e) }
      if (e === 'C') { reset(); }
      if (num1 && num2 && op === "+" && e === "="){setResult(+num1 + +num2)}
      if (num1 && num2 && op === "-" && e === "="){setResult(+num1 - +num2)}
      if (num1 && num2 && op === "*" && e === "="){setResult(+num1 * +num2)}
      if (num1 && num2 && op === "/" && e === "="){setResult(+num1 / +num2)}
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        {numbers.map((n, i) => (
          <MyButton
            key={i}
            style={n !== "C" ? styles.number : styles.clearOperator}
            onPress={() => onChange(n)}
          >
            {n}
          </MyButton>
        )
        )}
      </View>
      <View style={styles.operatorContainer}>
        {operators.map((o, i) =>
          <MyButton
            key={i}
            style={o !== "=" ? styles.operator : styles.result}
            onPress={() => onChange(o)}
          >
            {o}
          </MyButton>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
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
    height: 105,
  },

  operator: {
    backgroundColor: '#E4B2BB',
    width: 80,
    height: 83,
  },

  result: {
    backgroundColor: '#87cefa',
    width: 80,
    height: 90,
  },

  clearOperator: {
    backgroundColor: '#87cefa',
    width: 220,
    height: 110,
  }
});