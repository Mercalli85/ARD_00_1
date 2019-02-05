import React, { Component } from "react";
import { Image } from "react-native";
import AppOnBoardingScreen from "../screens/AppOnBoardingScreen";
import LoggedScreen from "../screens/LoggedScreen";
import LoginScreen from "../screens/LoginScreen";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import VolantinoScreen from "../screens/VolantinoScreen";
import HomeScreen from "../screens/HomeScreen";
import MainTabNavigator from "./MainTabNavigator";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});
HomeStack.navigationOptions = {
  tabBarLabel: "Offerte",
  tabBarIcon: <Image source={require("../assets/images/flyerp.png")} />
};

const AppNavigator = createSwitchNavigator(
  {
    AppOnBoarding: AppOnBoardingScreen,
    Login: LoginScreen,
    Logged: MainTabNavigator
  },
  {
    initialRouteName: "Logged",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const VolantinoStack = createStackNavigator({
  Volantino: VolantinoScreen
});
VolantinoStack.navigationOptions = {
  tabBarLabel: "Volantino",
  tabBarIcon: <Image source={require("../assets/images/flyerp.png")} />
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "white",
      activeBackgroundColor: "#807f81",
      inactiveBackgroundColor: "#646366",
      style: { height: 90, borderTopWidth: 7, borderTopColor: "#FFC700" },
      labelStyle: {
        fontSize: 18,
        paddingBottom: 5,
        marginTop: -8,
        fontFamily: "YanoneKaffeesatz"
      }
    }
  }
);

class Navigator extends Component {
  render() {
    return <AppNavigator />;
  }
}
export default createAppContainer(
  createSwitchNavigator({ AppNavigator, HomeStack, TabNavigator })
);
