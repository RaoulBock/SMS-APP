import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Input from "../Components/Inputs/Input";
import Button from "../Components/Button/Button";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  return (
    <View style={styles.outline}>
      <Text>Login bellow.</Text>
      <Input
        placeholder={"Someone@something.com"}
        onChangeText={(e) => setEmail(e)}
        ref={emailRef}
      />
      <Input
        placeholder={"Password"}
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
        ref={passwordRef}
      />
      <Button title={"Login"} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
