import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const Nav = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.btn]}>
          <Text>{APP_ICON.REFRESH}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { marginHorizontal: 10 }]}>
          <Text>{APP_ICON.ADD}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {}]}>
          <Text>{APP_ICON.SEARCH}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#00a76b",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#23d265",
    padding: 5,
    borderRadius: 10,
  },
});
