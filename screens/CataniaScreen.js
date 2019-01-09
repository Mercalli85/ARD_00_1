import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import { Header, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  liog: {
    width: "90%",
    marginTop: 20,
    borderRadius: 12,
    flexDirection: "row",
    height: 70,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "stretch"
  },
  liog1: {
    width: "90%",
    marginTop: 15,
    borderRadius: 12,
    flexDirection: "row",
    height: 70,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "stretch"
  }
});

export default class MapScreen extends React.Component {
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
          leftComponent={{
            icon: "arrow-back",
            color: "#fff",
            onPress: () => this.props.navigation.goBack()
          }}
          centerComponent={{
            text: "PUNTI VENDITA",
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
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.liog}>
            <View style={{ width: "11%", marginRight: "2%" }}>
              <Image
                source={require("../assets/images/icona_lista.png")}
                style={{ marginLeft: 15, marginTop: 20 }}
              />
            </View>
            <View
              style={{
                width: "62%",
                marginRight: "1%",
                flexDirection: "column",
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: "800",
                  fontFamily: "YanoneKaffeesatz",
                  fontSize: 22,
                  letterSpacing: 1,
                  textTransform: "uppercase"
                }}
              >
                Catania
              </Text>
              <Text style={{ marginLeft: 10 }}>
                Via Agrigento - 10 - 95128 Catania (CT)
              </Text>
            </View>
            <View
              style={{
                width: "20%",
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <TouchableOpacity
                style={{ alignSelf: "center", marginRight: 16 }}
                onPress={() => this.props.navigation.navigate("Catania1")}
              >
                <Icon name="info" type="Feather" color="#fdc700" size={25} />
              </TouchableOpacity>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <Icon name="star" type="feather" color="#fdc700" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.liog1}>
            <View style={{ width: "11%", marginRight: "2%" }}>
              <Image
                source={require("../assets/images/icona_lista.png")}
                style={{ marginLeft: 15, marginTop: 17 }}
              />
            </View>
            <View
              style={{
                width: "62%",
                marginRight: "1%",
                flexDirection: "column",
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: "800",
                  fontFamily: "YanoneKaffeesatz",
                  fontSize: 22,
                  letterSpacing: 1,
                  textTransform: "uppercase"
                }}
              >
                Catania
              </Text>
              <Text style={{ marginLeft: 10 }}>
                Via Conte Di Torino - 18 - 95100 Catania (CT)
              </Text>
            </View>
            <View
              style={{
                width: "20%",
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <TouchableOpacity
                style={{ alignSelf: "center", marginRight: 16, fontSize: 25 }}
                onPress={() => this.props.navigation.navigate("Catania2")}
              >
                <Icon name="info" type="Feather" color="#fdc700" size={25} />
              </TouchableOpacity>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <Icon name="star" type="feather" color="#fdc700" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
