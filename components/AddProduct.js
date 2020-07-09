import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Input } from "./styles/Input";
import { FilledButton } from "./styles/FilledButton";
import { Heading } from "./styles/Heading";

class AddProduct extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Add Product
          </Text>
          <Text>پروڈکٹ کا نام:</Text>
          <Input style={styles.textInput} placeholder={"Product Name"} />
          <Text>پروڈکٹ کی تفصیل:</Text>
          <Input
            style={styles.textInput}
            placeholder={"Product Description"}
            multiline={true}
          />
          <Text>پروڈکٹ کی تعداد:</Text>
          <Input
            style={styles.textInput}
            placeholder={"Quantity"}
            keyboardType={"number-pad"}
          />
          <Text>پروڈکٹ کی قیمت:</Text>
          <Input
            style={styles.textInput}
            placeholder={"Price (Rs.)"}
            keyboardType={"number-pad"}
          />
          <Text>پروڈکٹ کی قسم:</Text>
          <Input style={styles.textInput} placeholder={"Insert Tags"} />
        </View>
        <View style={styles.footerButton}>
          <FilledButton title={"جمع کیجئے"} style={styles.fillButtonDown} />
          <FilledButton
            title={"واپس پیچھے"}
            style={styles.fillButtonDown}
            onPress={() => this.props.navigation.navigate("Dashboard")}
          />
        </View>
      </View>
    );
  }
}
export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  textInput: {
    marginVertical: 8,
    alignSelf: "center",
    padding: 10,
  },
  footerButton: {
    marginTop: 60,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  fillButtonDown: {
    width: "50%",
    alignSelf: "center",
    borderRadius: 0,
  },
});
