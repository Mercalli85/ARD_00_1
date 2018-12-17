import React, { Component } from "react";
import Swiper from "@builderx/react-native-swiper";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, Image } from "react-native";

export default class carousal2 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 400,
    width: 330,
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
          showsButtons={true}
          bounces={true}
          autoplayDirection={true}
          autoplay={false}
          loop={false}
        >
          <View style={styles.rect1}>
            <Text style={styles.text1}>Page 1</Text>
            <Center horizontal>
              <Image
                source={require("../assets/slide1.png")}
                style={styles.image}
              />
            </Center>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.text2}>Page 2</Text>
            <Center horizontal>
              <Image
                source={require("../assets/slide2.png")}
                style={styles.image2}
              />
            </Center>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.text3}>Page 3</Text>
            <Center horizontal>
              <Image
                source={require("../assets/slide3.png")}
                style={styles.image3}
                resizeMode="stretch"
              />
            </Center>
          </View>
        </Swiper>
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
    height: 400,
    transform: [
      {
        rotate: "00deg"
      }
    ]
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
    height: 320,
    width: 163.15,
    top: 0,
    position: "absolute"
  },
  image2: {
    height: 320,
    width: 163,
    position: "absolute",
    top: "7.75%"
  },
  image3: {
    height: 320,
    width: 163,
    position: "absolute",
    top: "7.75%"
  }
});
