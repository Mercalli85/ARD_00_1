import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import { Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      showMe: false
    };
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/splash2.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "OFFERTE",
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showMe}
        >
          <View
            style={{
              backgroundColor: "#FED800",
              height: 200,
              width: "70%",
              alignSelf: "center",
              borderRadius: 12,
              padding: 20,
              marginTop: 230,
              flexDirection: "column"
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row-reverse",
                marginTop: -40,
                marginBottom: 0,
                marginLeft: -30
              }}
              onPress={() => {
                this.setState({
                  showMe: false
                });
              }}
            >
              <Ionicons name="ios-close-circle" size={50} />
            </TouchableOpacity>
            <View
              style={{
                height: 50,
                flexDirection: "row",
                contentAlign: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "YanoneKaffeesatz",
                  marginLeft: 22,
                  fontSize: 20,
                  lineHeight: 25
                }}
              >
                AGGIUNGERE ALLA LISTA SPESA?
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                contentAlign: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: 2
              }}
            >
              <NumericInput
                totalWidth={180}
                borderColor={"#fff"}
                minValue={0}
                rounded
                type="plus-minus"
                onChange={value => console.log(value)}
                rightButtonBackgroundColor="#fff"
                leftButtonBackgroundColor="#fff"
                totalHeight={60}
              />
            </View>
            <View style={{ position: "absolute", right: -10, bottom: -20 }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    showMe: false
                  });
                }}
              >
                <Ionicons name="ios-checkmark-circle" size={50} color="green" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <ScrollView style={{ height: "100%" }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                showMe: true
              });
            }}
            style={{
              flexDirection: "row",
              width: "94%",
              alignSelf: "center",
              contentAlign: "center",
              backgroundColor: "white",
              marginTop: 20,
              borderRadius: 12,
              height: 100,
              alignItems: "stretch"
            }}
          >
            <View
              style={{ width: "25%", marginRight: "2%", alignSelf: "center" }}
            >
              <Image
                style={{ borderRadius: 12, marginLeft: 10, marginRight: 10 }}
                source={require("../assets/images/funghi.png")}
              />
            </View>
            <View
              style={{
                width: "42%",
                alignSelf: "center",
                flexDirection: "column",
                marginRight: "2%"
              }}
            >
              <Text style={{ fontSize: 30, fontFamily: "YanoneKaffeesatz" }}>
                Cesto di Mele
              </Text>
              <Text style={{ fontSize: 12 }}>Deliziose mele dell'etna</Text>
              <Text style={{ fontSize: 12 }}>1 Kg</Text>
            </View>
            <View
              style={{
                width: 102,
                alignSelf: "center",
                flexDirection: "row",
                backgroundColor: "#FED800",
                justifyContent: "center",
                height: "100%",
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: "YanoneKaffeesatz",
                  alignSelf: "center",
                  color: "#000"
                }}
              >
                1,15€
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}
