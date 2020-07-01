import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { HeaderIconButton } from "../components/HeaderIconButton";
import { AuthContext } from "../contexts/AuthContext";
import { Product } from "../components/Product";
import { useGet } from "../hooks/useGet";
import { HeaderIconsContainer } from "../components/HeaderIconsContainer";
import { ThemeContext } from "../contexts/ThemeContext";

export function ProductsListScreen({ navigation }) {
  const { logout } = React.useContext(AuthContext);
  const switchTheme = React.useContext(ThemeContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconsContainer>
          <HeaderIconButton
            name={"color-palette"}
            onPress={() => {
              switchTheme();
            }}
          />
          <HeaderIconButton
            name={"log-out"}
            onPress={() => {
              logout();
            }}
          />
        </HeaderIconsContainer>
      ),
    });
  }, [navigation, logout, switchTheme]);
  const products = useGet("/products");

  function renderProduct({ item: product }) {
    return <Product product={product} />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.productsListContainer}
      data={products}
      renderItem={renderProduct}
      keyExtractor={(product) => `${product.id}`}
    />
  );
}

const styles = StyleSheet.create({
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

/*import * as React from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function Home({ navigation }) {
  return (
    /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Profile" />
    </View>
  );
}

export default Home;*/
