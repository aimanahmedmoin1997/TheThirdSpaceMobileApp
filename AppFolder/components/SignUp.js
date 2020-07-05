import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
import { Heading } from "./styles/Heading";
import { Input } from "./styles/Input";
import { FilledButton } from "./styles/FilledButton";
import { TextButton } from "./styles/TextButton";

export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  componentDidMount() {
    //1.
    // const value=AsyncStorage.gettItem("key");
    //if (value !== null){}
    //2.
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user != null) {
    //     console.log("We are authenticated now!");
    //   }
    // });
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Dashboard"))
      .catch((error) => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Heading style={styles.title}>Sign Up</Heading>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <Input
          placeholder={"Email"}
          autoCapitalize="none"
          style={styles.textInput}
          keyboardType={"email-address"}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          secureTextEntry={true}
          placeholder={"Password"}
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <FilledButton
          title={"Sign Up"}
          style={styles.signupButton}
          onPress={this.handleSignUp}
        />
        <TextButton
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
      /*<Button
          title="Login via OTP"
          onPress={() => this.props.navigation.navigate("Otp")}
        />*/
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
  title: {
    color: "#e55151",
  },
  signupButton: {
    marginVertical: 20,
  },
});
