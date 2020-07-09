import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
import { Heading } from "./styles/Heading";
import { Input } from "./styles/Input";
import { FilledButton } from "./styles/FilledButton";
import { TextButton } from "./styles/TextButton";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // AsyncStorage.setItem("key", "I like to save it.");
        this.props.navigation.navigate("Dashboard");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Heading style={styles.title}>Welcome To</Heading>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <Image
          style={styles.tinyLogo}
          fadeDuration={2000}
          source={require("../assets/login.png")}
        />
        <Input
          style={styles.textInput}
          autoCapitalize="none"
          placeholder={"ای-میل آئی ڈی"}
          keyboardType={"email-address"}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          secureTextEntry={true}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder={"پاسورڈ"}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <FilledButton
          title={"لاگ اِن"}
          style={styles.loginButton}
          onPress={this.handleLogin}
        />
        <TextButton
          title="اکاونٹ نہیں ہے؟ نیا بنایئے"
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 20,
  },
  tinyLogo: {
    width: 400,
    height: 130,
  },
  title: {
    color: "#e55151",
  },
});
