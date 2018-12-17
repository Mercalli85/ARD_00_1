import React, { Component } from "react";
import { View, Slider, StyleSheet } from "react-native";

export default class cupertinoSlider extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 30,
    width: 150,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <Slider
        style={[styles.root, this.props.style]}
        minimumTrackTintColor="#007AFF"
        minimumValue={0}
        maximumValue={100}
      />
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent"
  }
});
