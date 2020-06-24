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

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image fadeDuration={3000} source={require("./assets/logo1.jpg")} />
        <Button
          color="#502b35"
          title="Enter"
          onPress={() =>
            Alert.alert("Third Space", "Welcome To The Third Space!", [
              { text: "Continue", onPress: () => console.log("continue") },
            ])
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
  },
});
