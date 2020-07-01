import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
  Button,
} from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";
import { TextButton } from "../components/TextButton";

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Welcome To</Heading>
      <Image
        style={styles.tinyLogo}
        fadeDuration={2000}
        source={require("../images/login.png")}
      />
      <Input
        style={styles.input}
        placeholder={"Phone Number"}
        keyboardType={"numeric"}
        returnKeyType={"next"}
      />
      <Input
        style={styles.input}
        placeholder={"Password"}
        secureTextEntry={true}
      />
      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={() => {
          console.log("continue");
        }}
      />
      <TextButton
        title={"Don't have an account? Create one."}
        style={styles.textButton}
        onPress={() => {
          console.log("continue");
        }}
      />
    </View>
  );
}
/*<TouchableOpacity>
        <Image fadeDuration={3000} source={require("../images/logo.jpg")} />
        <Button
          color="#e55151"
          title="Login"
          onPress={() =>
            Alert.alert("Third Space", "Welcome To The Third Space!", [
              { text: "Continue", onPress: () => console.log("continue") },
            ])
          }
        />
      </TouchableOpacity>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  tinyLogo: {
    width: 400,
    height: 130,
  },
  input: {
    marginVertical: 8,
  },
  title: {
    color: "#e55151",
  },
  loginButton: {
    marginVertical: 20,
  },
  textButton: {},
});

//aqua color: "#58f9e0"
//red color: "#e55151"
//black color: "#191919"
