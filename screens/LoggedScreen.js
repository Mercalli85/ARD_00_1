import React from "react";
import { ImageBackground } from "react-native";

export default class LoggedScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/splash2.png")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}
