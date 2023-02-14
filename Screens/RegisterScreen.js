import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Input from "../Components/Inputs/Input";
import Button from "../Components/Button/Button";
import { AppContext } from "../Context/AppContext";

const RegisterScreen = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const passwordConfirmRef = React.useRef();

  const {
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm
  } = React.useContext(AppContext);

  return (
    <View style={styles.outline}>
      <Text>Register bellow</Text>

      <Input
        placeholder={"Someone@something.com"}
        ref={emailRef}
        onChangeText={(e) => setEmail(e)}
      />
      <Input
        placeholder={"password"}
        secureTextEntry={true}
        ref={passwordRef}
        onChangeText={(e) => setPassword(e)}
      />
      <Input
        placeholder={"password confirm"}
        ref={passwordConfirmRef}
        onChangeText={(e) => setPasswordConfirm(e)}
      />
      <Button title={"Sign up"} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
