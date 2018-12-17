import React, { Component } from "react";
import Swiper from "@builderx/react-native-swiper";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class carousal1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 81,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Swiper
          style={styles.carousel1}
          dotStyle={{}}
          activeDotStyle={{}}
          buttonTextStyle={{}}
          index={0}
        >
          <View style={styles.rect1}>
            <Text style={styles.text1}>
              {this.props.text1 ? this.props.text1 : "Page 1"}
            </Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.text2}>
              {this.props.text2 ? this.props.text2 : "Page 2"}
            </Text>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.text3}>
              {this.props.text3 ? this.props.text3 : "Page 3"}
            </Text>
          </View>
        </Swiper>
        <Image source={require("../assets/slide1.png")} style={styles.image} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  carousel1: {
    width: 330,
    height: 400
  },
  rect1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5C6BC0"
  },
  text1: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF"
  },
  rect2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3"
  },
  text2: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF"
  },
  rect3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688"
  },
  text3: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF"
  },
  image: {
    height: 735,
    width: 375,
    top: 0,
    left: 0,
    position: "absolute"
  }
});
