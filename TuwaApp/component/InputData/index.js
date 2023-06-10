import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const InputData = ({ label, placeholder, keyboardType, onChangeText, nameState, value }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} placeholder={placeholder} keyboardType={keyboardType} value={value} onChangeText={(text) => onChangeText(nameState, text)}></TextInput>
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 15,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 100,
    height: 44,
    width: 307,
    padding: 10,
    marginBottom: 15,
  },
});
