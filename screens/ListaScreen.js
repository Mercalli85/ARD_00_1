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

const MAX_PHOTOS = 20;

export default class ListaScreen extends React.Component {
  state = {
    images: [],
    loading: false
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this._getPhotos();
  }

  _getPhotos = async () => {
    this.setState({ loading: true });
    const res = await CameraRoll.getPhotos({
      first: MAX_PHOTOS
    });

    this.setState({
      images: [...this.state.images, ...res.edges],
      loading: false
    });

    console.log("=======================");
    console.log("res", res);
    console.log("=======================");
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.node.image.uri }} style={StyleSheet.image} />
      </View>
    );
  };

  _keyExtractor = item => item.node.image.filename;
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator />
        </View>
      );
    }
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
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
