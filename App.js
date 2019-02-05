import React from "react";
import { AppLoading, Asset, Font } from "expo";
import Navigator from "./navigation/Navigator";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
      ;
  }
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    } else {
      return <Navigator />;
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      await Font.loadAsync({
        "YanoneKaffeesatz": require("./assets/fonts/YanoneKaffeesatz-Regular.ttf")
      }),
      Asset.loadAsync([
        require("./assets/images/starp.png"),
        require("./assets/images/gift.png"),
        require("./assets/images/checkp.png"),
        require("./assets/images/mapp.png"),
        require("./assets/images/map_big.png"),
        require("./assets/images/flyerp.png"),
        require("./assets/images/flyer_big.png"),
        require("./assets/images/splash.png"),
        require("./assets/images/splash2.png"),
        require("./assets/images/logo_mini.png"),
        require("./assets/images/icona_lista.png"),
        require("./assets/images/nav.png"),
        require("./assets/images/logo.png"),
        require("./assets/images/logo_160.png"),
        require("./assets/images/icon_header.png"),
        require("./assets/images/slider0.png")
      ])
    ]);
  };


  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
}