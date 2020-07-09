import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";

import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA5aZ5aR2haxw6Wk34w-x6VwmW40cJ207g",
  authDomain: "thethirdspace-9a7b4.firebaseapp.com",
  databaseURL: "https://thethirdspace-9a7b4.firebaseio.com",
  projectId: "thethirdspace-9a7b4",
  storageBucket: "thethirdspace-9a7b4.appspot.com",
  messagingSenderId: "747330501851",
  appId: "1:747330501851:web:232c97b2ab367789c160fe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// import the different screens
import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./components/Main";
import Otp from "./components/Phone/Otp";
import Dashboard from "./components/Dashboard";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

// create our app's navigation stack
const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Dashboard: Dashboard,
    AddProduct: AddProduct,
    EditProduct: EditProduct,
    Main: Main,
    Otp: Otp,
  },
  {
    initialRouteName: "Loading",
  }
);

const App = createAppContainer(RootStack);
export default App;
