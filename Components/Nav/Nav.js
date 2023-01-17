import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const Nav = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text>{APP_ICON.REFRESH}</Text>
      </TouchableOpacity>
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
});
