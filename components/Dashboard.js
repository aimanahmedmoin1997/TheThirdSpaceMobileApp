import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";
import { FilledButton } from "./styles/FilledButton";
import { TextButton } from "./styles/TextButton";
import { Heading } from "./styles/Heading";

function Item({ item, navigation }) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.Picture }}
        style={{
          width: 250,
          height: 250,
          alignSelf: "center",
        }}
      />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item.Name}</Text>
        <Text>{item.Desc}</Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Quantity: </Text>
          {item.Quantity}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Product Price: </Text> Rs.{" "}
          {item.Price}/=
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Product Type: </Text>
          {item.Type}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "50%",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <FilledButton
          title={"تبدیل کیجئے"}
          style={{ backgroundColor: "green", padding: 10, borderRadius: 0 }}
          onPress={() => console.log("Edit Object Pressed.")}
        />
        <FilledButton
          title={"ڈیلیٹ"}
          style={{ backgroundColor: "red", padding: 10, borderRadius: 0 }}
          onPress={() => console.log("Delete Object Pressed.")}
        />
      </View>
    </View>
  );
}

export default class Dashboard extends React.Component {
  state = {
    data: [
      {
        Name: "Purse",
        Desc:
          "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        Quantity: 24,
        Price: 210,
        Picture: "http://dummyimage.com/229x128.bmp/5fa2dd/ffffff",
        Type: "Scarf",
        P_ID: "58-2823673",
      },
      {
        Name: "Bag",
        Desc:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        Quantity: 89,
        Price: 865,
        Picture: "http://dummyimage.com/235x147.jpg/ff4444/ffffff",
        Type: "Scarf",
        P_ID: "34-6100210",
      },
      {
        Name: "Necklace",
        Desc:
          "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        Quantity: 1,
        Price: 383,
        Picture: "http://dummyimage.com/197x126.jpg/ff4444/ffffff",
        Type: "Bag",
        P_ID: "67-2028111",
      },
      {
        Name: "Scarf",
        Desc:
          "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
        Quantity: 21,
        Price: 372,
        Picture: "http://dummyimage.com/101x187.jpg/dddddd/000000",
        Type: "Scarf",
        P_ID: "09-0331659",
      },
      {
        Name: "Necklace",
        Desc:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        Quantity: 67,
        Price: 647,
        Picture: "http://dummyimage.com/200x119.png/5fa2dd/ffffff",
        Type: "Shoes",
        P_ID: "35-5741598",
      },
      {
        Name: "Necklace",
        Desc: "Phasellus sit amet erat. Nulla tempus.",
        Quantity: 37,
        Price: 849,
        Picture: "http://dummyimage.com/229x243.jpg/cc0000/ffffff",
        Type: "Scarf",
        P_ID: "96-6319957",
      },
      {
        Name: "Purse",
        Desc:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
        Quantity: 74,
        Price: 878,
        Picture: "http://dummyimage.com/178x161.jpg/cc0000/ffffff",
        Type: "Shoes",
        P_ID: "44-6293751",
      },
    ],
  };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // AsyncStorage.removeItem("key");
        this.props.navigation.navigate("Login");
      });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerButton}>
          <FilledButton
            title={"لاگ آؤٹ"}
            style={styles.fillButtonTop}
            onPress={this.logoutUser}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            style={{ flex: 1 }}
            data={this.state.data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.P_ID}
          />
        </View>
        <View style={styles.footerButton}>
          <FilledButton
            title={"نیا پروڈکٹ"}
            style={styles.fillButtonDown}
            onPress={() => this.props.navigation.navigate("AddProduct")}
          />
          <FilledButton
            title={"Edit"}
            style={styles.fillButtonDown}
            onPress={() => this.props.navigation.navigate("EditProduct")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 10,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    //flexDirection: "row",
    borderRadius: 5,
  },
  fillButtonDown: {
    width: "50%",
    alignSelf: "center",
    borderRadius: 0,
  },
  headerButton: {
    paddingTop: 8,
    marginBottom: 5,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  footerButton: {
    marginTop: 15,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  fillButtonTop: {
    borderRadius: 0,
    padding: 5,
    backgroundColor: "#191919",
  },
});

/*
<View style={{ backgroundColor: "#191919" }}>
          <Heading
            style={{
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            The Third Space
          </Heading>
        </View>
*/
