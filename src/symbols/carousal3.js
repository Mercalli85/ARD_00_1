import React, { Component } from "react";
import Swiper from "@builderx/react-native-swiper";
import { View, Text, StyleSheet, Image } from "react-native";

export default class carousal3 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 400,
    width: 330,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
        <Swiper
          style={styles.carousel1}
          showsButtons={true}
        >
          <View style={styles.rect1}>
            <Text style={styles.text1}>Benvenuto nellapp</Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.text1}>Resta sempre aggiornato</Text>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.text1}>Page 3</Text>
          </View>
        </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  carousel1: {
    width: 330,
    height: 400
  },
  rect1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rect2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rect3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text1: {
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "YanoneKaffeesatz-Bold",
    color: "rgba(100,99,102,1)"
  },
  text2: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF"
  },
  text3: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF"
  },
  text4: {
    height: 25.29,
    width: 132.64,
    top: 219.2,
    left: 108.58,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "YanoneKaffeesatz-Bold",
    color: "rgba(100,99,102,1)"
  },
  HQe10G: {
    height: 1,
    width: 1,
    top: 36.36,
    left: 27.76,
    position: "absolute",
    backgroundColor: "transparent"
  },
  DTYLLo: {
    height: 264,
    width: 264,
    top: 0,
    left: 0,
    position: "absolute"
  }
});




