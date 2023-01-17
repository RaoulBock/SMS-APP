import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const List = ({ item }) => {
  const [scaleValue] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const name =
    item.name.length > 25 ? item.name.substring(0, 20) + "..." : item.name;
  return (
    <Animated.View
      style={[styles.outline, { transform: [{ scale: scaleValue }] }]}
    >
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={[styles.text, styles.message]}>{item.phoneNumber}</Text>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.btn, { marginRight: 10 }]}>
          <Text>{APP_ICON.CALL}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {}]}>
          <Text>{APP_ICON.VIDEO}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default List;

const styles = StyleSheet.create({
  outline: {
    padding: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#f6f6f6",
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: "500",
    color: "#404040",
    fontSize: 20,
  },
  message: {
    color: "gray",
    fontSize: 15,
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
