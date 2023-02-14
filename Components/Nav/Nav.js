import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const Nav = ({ title }) => {
  const [activeOption, setActiveOption] = React.useState("Home");
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.navScrollView}
      >
        <View style={styles.navOptionContainer}>
          <Text
            style={[styles.navOption, activeOption === "Home" && styles.active]}
            onPress={() => setActiveOption("Home")}
          >
            Home
          </Text>
          <View
            style={[
              styles.indicator,
              activeOption === "Home" && styles.activeIndicator,
            ]}
          />
        </View>
        <View style={styles.navOptionContainer}>
          <Text
            style={[styles.navOption, activeOption === "Chat" && styles.active]}
            onPress={() => setActiveOption("Chat")}
          >
            Chat
          </Text>
          <View
            style={[
              styles.indicator,
              activeOption === "Chat" && styles.activeIndicator,
            ]}
          />
        </View>
        <View style={styles.navOptionContainer}>
          <Text
            style={[
              styles.navOption,
              activeOption === "Status" && styles.active,
            ]}
            onPress={() => setActiveOption("Status")}
          >
            Status
          </Text>
          <View
            style={[
              styles.indicator,
              activeOption === "Status" && styles.activeIndicator,
            ]}
          />
        </View>
      </ScrollView>
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
