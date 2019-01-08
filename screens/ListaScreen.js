import React from "react";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  CameraRoll
} from "react-native";
import { Header } from "react-native-elements";

export default class ListaScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/splash2.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "LISTA SPESA",
            style: {
              color: "#fff",
              fontFamily: "YanoneKaffeesatz",
              fontSize: 25
            }
          }}
          rightComponent={
            <Image
              style="marginTop:15"
              source={require("../assets/images/logo_mini.png")}
            />
          }
          containerStyle={{ backgroundColor: "#646366", height: 70 }}
        />
        <View>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
