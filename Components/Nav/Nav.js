import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const Nav = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.btn, { marginRight: 10 }]}>
          <Text>{APP_ICON.REFRESH}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {}]}>
          <Text>{APP_ICON.ADD}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 18,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#eef0fe",
    padding: 5,
    borderRadius: 10,
  },
});
