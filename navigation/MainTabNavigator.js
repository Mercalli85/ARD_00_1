import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ListaScreen from "../screens/ListaScreen";
import VolantinoScreen from "../screens/VolantinoScreen";
import MapScreen from "../screens/MapScreen";
import ComuneScreen from "../screens/ComuneScreen";
import CataniaScreen from "../screens/CataniaScreen";
import Catania1Screen from "../screens/Catania1Screen";
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home"
  }
);
const App = createAppContainer(HomeStack);

HomeStack.navigationOptions = {
  tabBarLabel: "Offerte",
  tabBarIcon: <Image source={require("../assets/images/star.png")} />
};

const ListaStack = createStackNavigator({
  Links: ListaScreen
});

ListaStack.navigationOptions = {
  tabBarLabel: "Lista spesa",
  tabBarIcon: <Image source={require("../assets/images/check.png")} />
};

const VolantinoStack = createStackNavigator({
  Volantino: VolantinoScreen
});

VolantinoStack.navigationOptions = {
  tabBarLabel: "Volantino",
  tabBarIcon: <Image source={require("../assets/images/flyer.png")} />
};

const MapStack = createStackNavigator({
  Comune: ComuneScreen,
  Catania: CataniaScreen,
  Catania1: Catania1Screen
});

MapStack.navigationOptions = {
  tabBarLabel: "Punti Vendita",
  tabBarIcon: <Image source={require("../assets/images/map.png")} />
};

export default createBottomTabNavigator(
  {
    HomeStack,
    VolantinoStack,
    ListaStack,
    MapStack
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
