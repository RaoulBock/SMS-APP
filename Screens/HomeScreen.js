import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Button,
  FlatList,
} from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import SearchInput from "../Components/Inputs/SearchInput";
import * as SMS from "expo-sms";
import { data } from "../Context/settings";
import List from "../Components/List/List";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <Nav title={"Chat App"} />
      <SearchInput placeholder={"Search"} multiline={false} />
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <List item={item} />}
          keyExtractor={(item) => item.toString()}
        />
      </View>
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
