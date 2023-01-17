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
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <Text>{item.name}</Text>
    </Animated.View>
  );
};

export default List;

const styles = StyleSheet.create({});
