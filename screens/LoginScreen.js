import React, { Component } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/images/splash.png")}
      >
        <View style={styles.root}>
          <Text>ciao</Text>
        </View>
      </ImageBackground>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
