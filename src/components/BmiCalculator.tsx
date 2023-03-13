import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';


const BmiCalculator = () =>{
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  //const [description, setDescription] = useState('');

  const calBMI = () => {
      const calculate = (Number(weight) / (Number(height)*Number(height)/10000)).toFixed(1);
      setBmi(calculate);
  }

  
  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter height in cm"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter weight in Kgs"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <TouchableOpacity style={styles.calculateBmiButton} onPress={calBMI}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.resultBMI}>
          {(Number(bmi)< 18.5 && bmi.length > 0) && 'Underweight, your BMI is ' + bmi }
          {(Number(bmi) >= 18.5 && Number(bmi) <= 24.9) && 'Fit, your BMI is ' + bmi }
          {(Number(bmi) >= 25 && Number(bmi) <= 29.9) && 'Overweight, your BMI is ' + bmi}
          {(Number(bmi) >= 30) && 'Obese, your BMI is ' + bmi }
          </Text>
       
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
    padding: 10,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  calculateBmiButton: {
    backgroundColor: '#2596be',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
     fontWeight: '500'
    },
   resultBMI:{
   fontSize: 24,
   fontWeight: '500'

    },

});
export default BmiCalculator;