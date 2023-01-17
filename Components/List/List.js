import { StyleSheet, Text, View, Animated } from "react-native";
import React from "react";

const List = ({ item }) => {
  const [scaleValue] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={[styles.outline, { transform: [{ scale: scaleValue }] }]}
    >
      <Text style={styles.text}>{item.name}</Text>
      <Text style={[styles.text, styles.message]}>{item.message}</Text>
    </Animated.View>
  );
};

export default List;

const styles = StyleSheet.create({
  outline: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#ddd",
  },
  text: {
    fontWeight: "500",
    color: "#404040",
  },
  message: {
    color: "gray",
  },
});
