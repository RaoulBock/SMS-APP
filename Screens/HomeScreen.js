import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import SearchInput from "../Components/Inputs/SearchInput";
import * as SMS from "expo-sms";
import { data } from "../Context/settings";
import List from "../Components/List/List";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { AppContext } from "../Context/AppContext";

const HomeScreen = () => {
  const {
    contacts,
    setSearchTerm,
    searchTerm,
    filteredContacts,
    isLoading,
    setIsLoading,
  } = React.useContext(AppContext);

  const firebaseConfig = {
    apiKey: "AIzaSyBaatm0aQmB6vb1-hayXeEWbBomnmtkp7U",
    authDomain: "chat-app-f916a.firebaseapp.com",
    databaseURL: "https://chat-app-f916a-default-rtdb.firebaseio.com",
    projectId: "chat-app-f916a",
    storageBucket: "chat-app-f916a.appspot.com",
    messagingSenderId: "118007497214",
    appId: "1:118007497214:web:cd9acb622be29469aec0af",
  };
  // Initialize Firebase
  initializeApp(firebaseConfig);

  const storeHighScore = (userId, score) => {
    const db = getDatabase();
    const reference = ref(db, "users/" + userId);
    set(reference, {
      highscore: score,
    });
  };

  return (
    <View style={styles.outline}>
      <Nav title={"Noxus"} />
      {/* <SearchInput
        placeholder={"Search"}
        multiline={false}
        onChangeText={setSearchTerm}
        value={searchTerm}
      /> */}
      <View>
        <FlatList
          data={contacts}
          renderItem={({ item }) => <List item={item} />}
          keyExtractor={(item) => `${item.id}-${item.name}`}
          initialNumToRender={10}
          onEndReachedThreshold={0.5}
          maxToRenderPerBatch={10}
          onEndReached={() => {
            setIsLoading(true);
            // fetch more data
            setIsLoading(false);
          }}
          ListFooterComponent={
            isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : null
          }
        />
        {/* <View>
          <ScrollView>
            {filteredContacts.map((contact, idx) => (
              <List item={contact} key={idx} />
            ))}
          </ScrollView>
        </View> */}
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
  btn: {
    backgroundColor: "gray",
    padding: 10,
  },
  text: {
    width: 200,
    backgroundColor: "red",
    padding: 20,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});
