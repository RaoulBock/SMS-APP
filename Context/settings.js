export const APP_PAGES = {
  APP: {
    HOME: "HOME",
  },
};

import { Ionicons } from "react-native-vector-icons";

export const APP_ICON = {
  SEARCH: (
    <Ionicons
      name={"ios-search-outline"}
      style={{ color: "#fff", fontSize: 28 }}
    />
  ),
  REFRESH: (
    <Ionicons name={"ios-refresh"} style={{ color: "#fff", fontSize: 28 }} />
  ),
  ADD: (
    <Ionicons
      name={"ios-add-outline"}
      style={{ color: "#fff", fontSize: 28 }}
    />
  ),
  VIDEO: (
    <Ionicons
      name={"ios-videocam-outline"}
      style={{ color: "#4877d8", fontSize: 28 }}
    />
  ),
  CALL: (
    <Ionicons
      name={"ios-call-outline"}
      style={{ color: "#4877d8", fontSize: 28 }}
    />
  ),
};

export const data = [
  {
    id: 1,
    name: "Raoul Bock",
    phoneNumber: "1234567890",
    message: "Hi There how are you going this morning",
    timeStamp: "12:45",
    isAvalible: false,
  },
];
