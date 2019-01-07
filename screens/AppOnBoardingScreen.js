import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";

class AppOnBoardingScreen extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        activeDotColor={"#17418d"}
        showsButtons={false}
        loop={false}
        onMomentumScrollEnd={this._onMomentumScrollEnd}
      >
        <ImageBackground
          source={require("../assets/images/slider0.png")}
          style={{ width: "100%", height: "100%" }}
          style={styles.slide1}
        >
          <View style={styles.container_swiper}>
            <Image
              style={{ marginBottom: 20 }}
              source={require("../assets/images/logo_160.png")}
            />
            <Text style={styles.text}>Grazie per aver scelto</Text>
            <Text style={styles.text}>ARD Discount</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/slider0.png")}
          style={styles.slide2}
        >
          <View style={styles.container_swiper}>
            <Text style={styles.text}>Sfoglia il volantino</Text>
            <Image
              style={{ marginTop: 10, marginBottom: 40 }}
              source={require("../assets/images/flyer_big.png")}
            />
            <Text style={styles.text}>Ottieni informazioni </Text>
            <Text style={styles.text}>sui punti vendita</Text>
            <Image
              style={{ marginTop: 10, marginBottom: 20 }}
              source={require("../assets/images/map_big.png")}
            />
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/slider0.png")}
          style={styles.slide3}
        >
          <View style={styles.container_swiper}>
            <Text style={styles.text}>Trova le offerte</Text>
            <Image
              style={{ marginTop: 10, marginBottom: 40 }}
              source={require("../assets/images/gift_big.png")}
            />
            <Text style={styles.text}>e accumula punti</Text>
            <Text style={styles.text}>fedeltà</Text>
            <Image
              style={{ marginTop: 10, marginBottom: 20 }}
              source={require("../assets/images/star_big.png")}
            />
            <TouchableOpacity
              style={styles.bottone}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.btn_text}>Inizia Subito!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Swiper>
    );
  }
}

export default AppOnBoardingScreen;

const styles = StyleSheet.create({
  bottone: {
    backgroundColor: "#fdc700",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 50
  },
  btn_text: { fontFamily: "YanoneKaffeesatz", fontSize: 25 },
  container_swiper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  slide1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#646366",
    fontSize: 32,
    fontFamily: "YanoneKaffeesatz",
    fontWeight: "bold"
  }
});
