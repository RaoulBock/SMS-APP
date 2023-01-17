import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import SearchInput from "../Components/Inputs/SearchInput";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <Nav title={"Chat App"} />
      <SearchInput placeholder={"Search"} multiline={false} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
