import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const SearchInput = ({ placeholder, value, multiline, onChangeText }) => {
  return (
    <View style={styles.outline}>
      <Text>{APP_ICON.SEARCH}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        multiline={multiline}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#f6f6f6",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "#f6f6f6",
    width: "100%",
    fontWeight: "500",
    color: "#404040",
    paddingHorizontal: 5,
  },
});
