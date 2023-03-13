import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import BmiCalculator from './src/components/BmiCalculator';
// import { BMI } from './src/components/BmiCalculator';
import { BmiEntity } from './src/entities/BmiEntity';
import { useState } from 'react';

export default function App() {

  const [bmis, setBMIs] = useState([]);

  return (
    <View style={styles.container}>
      <Header title="BMI Calculator" />
      <BmiCalculator  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});



