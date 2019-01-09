import React from "react";
import {
  ImageBackground,
  Image,
  WebView,
  CameraRoll,
  Text
} from "react-native";
import { takeSnapshotAsync } from "expo";
import { Header, Button } from "react-native-elements";

export default class VolantinoScreen extends React.Component {
  state = {
    cameraRollUri: null
  };
  static navigationOptions = {
    header: null
  };

  _saveToCameraRollAsync = async () => {
    let result = await takeSnapshotAsync(this._container, {
      format: "jpg",
      result: "tmpfile"
    });

    let saveResult = await CameraRoll.saveToCameraRoll(result, "photo");
    this.setState({ cameraRollUri: saveResult });
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/splash2.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => console.log("pressed")
          }}
          centerComponent={{
            text: "VOLANTINO",
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
        <WebView
          ref={view => {
            this._container = view;
          }}
          collapsable={false}
          useWebKit={false}
          source={{
            url:
              "https://www.ardsicilia.it/wp-content/uploads/2019/01/18H36.pdf"
          }}
        />

        {this.state.cameraRollUri && (
          <Image
            source={{ uri: this.state.cameraRollUri }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <Button title="prova" onPress={this._saveToCameraRollAsync} />
      </ImageBackground>
    );
  }
}
