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
import { MapView } from "expo";
import Communications from "react-native-communications";

const styles = StyleSheet.create({
  puntovendita: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 10
  },
  pvinfo: {
    flexDirection: "row",
    fontSize: 30,
    marginTop: 10,
    paddingLeft: 10
  },
  pvinfo2: {
    flexDirection: "row",
    fontSize: 30,
    paddingLeft: 10
  },
  pvhead: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 0,
    flexDirection: "row",
    alignSelf: "center"
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
            text: "Catania",
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
          <View style={styles.pvhead}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "YanoneKaffeesatz",
                marginLeft: 10,
                marginBottom: 10,
                marginTop: 10,
                alignItems: "center"
              }}
            >
              Scheda Punto Vendita
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 15,
                alignSelf: "center",
                flexDirection: "row"
              }}
            >
              <Icon name="star" type="feather" color="#646366" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.puntovendita}>
            <View style={styles.pvinfo}>
              <Icon name="map" type="Feather" color="#fdc700" size={30} />
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: "YanoneKaffeesatz",
                  marginLeft: 13,
                  marginBottom: 20,
                  color: "#646366"
                }}
              >
                Via Agrigento 10 Catania
              </Text>
            </View>
            <View style={styles.pvinfo2}>
              <Icon name="phone" type="Feather" color="#fdc700" size={30} />
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: "YanoneKaffeesatz",
                  marginLeft: 13,
                  marginBottom: 20,
                  color: "#646366"
                }}
              >
                095 504174
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                height: 50,
                width: "33%",
                backgroundColor: "#646366",
                borderRadius: 5,
                marginTop: 15,
                marginRight: "2%",
                justifyContent: "center",
                alignSelf: "center"
              }}
              onPress={() => Communications.phonecall("+39095504174", true)}
            >
              <Icon
                name="phone"
                type="Feather"
                color="#fdc700"
                size={25}
                marginTop={12}
                paddingRight={5}
                style={{ alignSelf: "center", justifyContent: "center" }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontFamily: "YanoneKaffeesatz",
                  fontSize: 25,
                  color: "#fff"
                }}
              >
                Contatta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                height: 50,
                width: "55%",
                backgroundColor: "#646366",
                borderRadius: 5,
                marginTop: 15,
                justifyContent: "center",
                alignSelf: "center"
              }}
              onPress={() =>
                Communications.web(
                  "https://www.google.it/maps/place/37.521062+15.087979"
                )
              }
            >
              <Icon
                name="navigation"
                type="Feather"
                color="#fdc700"
                size={25}
                marginTop={12}
                paddingRight={5}
                style={{ alignSelf: "flex-start", justifyContent: "center" }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontFamily: "YanoneKaffeesatz",
                  fontSize: 25,
                  color: "#fff"
                }}
              >
                Ottieni indicazioni
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 230,
              marginTop: 15,
              width: "90%",
              alignSelf: "center"
            }}
          >
            <MapView
              provider={"google"}
              minZoomLevel={14}
              style={{
                flex: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center"
              }}
              initialRegion={{
                latitude: 37.521062,
                longitude: 15.087979,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <MapView.Marker
                key={1}
                coordinate={{ latitude: 37.521062, longitude: 15.087979 }}
                title={"Ard Discount"}
                description={"Via Agrigento"}
              />
            </MapView>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                height: 50,
                width: "100%",
                backgroundColor: "#646366",
                borderRadius: 5,
                marginTop: 15,
                justifyContent: "center",
                alignSelf: "center"
              }}
              onPress={() => this.props.navigation.navigate("Volantino")}
            >
              <Icon
                name="book-open"
                type="feather"
                color="#fdc700"
                size={25}
                marginTop={12}
                paddingRight={10}
                style={{ alignSelf: "flex-start", justifyContent: "center" }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontFamily: "YanoneKaffeesatz",
                  fontSize: 25,
                  color: "#fff"
                }}
              >
                Sfoglia il Volantino
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.pvhead}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: "YanoneKaffeesatz",
                marginLeft: 10,
                marginBottom: 10,
                marginTop: 10
              }}
            >
              Servizi e Orari
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
