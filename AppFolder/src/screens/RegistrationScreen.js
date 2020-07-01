import React from "react";
import { StyleSheet, View, Alert, Image } from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";
import { TextButton } from "../components/TextButton";

export function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>رجسٹر یشن</Heading>
      <Input
        style={styles.input}
        placeholder={"موبائل نمبر"}
        keyboardType={"numeric"}
        returnKeyType={"next"}
      />
      <Input
        style={styles.input}
        placeholder={"پن نمبر"}
        secureTextEntry={true}
      />
      <FilledButton
        title={"رجسٹر کیجئے"}
        style={styles.loginButton}
        onPress={() => {
          console.log("continue");
        }}
      />
    </View>
  );
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
});

//aqua color: "#58f9e0"
//red color: "#e55151"
//black color: "#191919"
