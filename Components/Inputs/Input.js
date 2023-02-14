import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({
  placeholder,
  keyboardType,
  onChangeText,
  secureTextEntry
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#e7e7e7",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10
  }
});
