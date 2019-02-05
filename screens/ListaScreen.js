import React from "react";
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  FlatList,
  CameraRoll
} from "react-native";
import { Header } from "react-native-elements";

export default class ListaScreen extends React.Component {
  state = {
    images: [],
    loading: false
  };

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
        <View />
        <FlatList
          data={this.state.images}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  imageWrapper: {
    width: 100,
    height: 100
  },
  image: {
    flex: 1
  }
});
