import React from "react";
import {
  ImageBackground,
  Image,
  WebView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { Header, Button } from "react-native-elements";

export default class VolantinoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  static navigationOptions = {
    header: null
  };

  hideSpinner() {
    this.setState({ visible: false });
  }

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
        <View style={{ flex: 1 }}>
          <WebView
            onLoad={() => this.hideSpinner()}
            style={{}}
            source={{
              url:
                "https://www.ardsicilia.it/wp-content/uploads/2019/01/19H01_ARD_web.pdf"
            }}

            ref={view => {
              this._container = view;
            }}
            collapsable={false}
            useWebKit={false}

          />
          {this.state.visible && (
            <ActivityIndicator
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}
              size="large"
            />
          )}
        </View>

      </ImageBackground>
    );
  }
}
