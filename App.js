// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import MyWebView from "./WebViewComponent";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MyWebView />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
