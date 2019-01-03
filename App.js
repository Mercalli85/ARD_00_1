import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import AppOnBoardingScreen from "./screens/AppOnBoardingScreen";

const AppNavigator = createSwitchNavigator(
  {
    AppOnBoarding: AppOnBoardingScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "AppOnBoarding",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
      <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppContainer />
      </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/star.png"),
        require("./assets/images/gift.png"),
        require("./assets/images/check.png"),
        require("./assets/images/map_big.png"),
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
      ]),
      Font.loadAsync({
        YanoneKaffeesatz: require("./assets/fonts/YanoneKaffeesatz-Regular.ttf"),
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}