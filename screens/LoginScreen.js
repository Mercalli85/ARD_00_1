import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends Component {
  state = {
    validating: false
  }

  render() {
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/images/splash.png")}
      >
        <View style={styles.root}>
          <View style={styles.logo}>
            <Image source={require("../assets/images/logo_160.png")} />
            <Text style={styles.payoff}>CONVIENE SAPER SCEGLIERE</Text>
          </View>
          <View style={styles.body_login}>
            <TextInput
              autoCorrect={false}
              style={{
                height: 40,
                fontFamily: "YanoneKaffeesatz",
                backgroundColor: "white",
                height: 50,
                marginTop: 35,
                width: "100%",
                alignSelf: "center",
                paddingLeft: 20,
                borderRadius: 5,
                shadowColor: "black",
                fontSize: 25,
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.5,
                shadowRadius: 2
              }}
              placeholder="Inserisci il tuo indirizzo e-mail"
              onChangeText={text => this.setState({ email: text })}
            />
            <TextInput
              secureTextEntry={true}
              autoCorrect={false}
              style={{
                height: 40,
                fontFamily: "YanoneKaffeesatz",
                backgroundColor: "white",
                height: 50,
                marginTop: 20,
                width: "100%",
                alignSelf: "center",
                paddingLeft: 20,
                borderRadius: 5,
                shadowColor: "black",
                fontSize: 25,
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.5,
                shadowRadius: 2
              }}
              placeholder="Scegli la Password"
              onChangeText={text => this.setState({ password: text })}
            />
            <TouchableOpacity
              style={{ marginTop: 20, alignItems: "center" }}
              onPress={() => {
                if (this.state.email && this.state.password) {
                  this.validate();
                }
              }}
            >
              <Text style={{ fontFamily: "YanoneKaffeesatz" }}>
                Password dimenticata? Reimposta adesso cliccando qui!
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.area_btn}>
            <TouchableOpacity
              style={styles.bottoni_login1}
              onPress={() => this.props.navigation.navigate("Logged")}
            >
              <Text style={styles.bottoni_login_txt}>ACCEDI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottoni_login2}>
              <Text style={styles.bottoni_login_txt}>REGISTRATI</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.bottoni_login3}>
            <Text style={styles.bottoni_login_txt}>ACCEDI CON FACEBOOK</Text>
            <Ionicons name="logo-facebook" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  validate() {
    this.setState({ validating: true });

    let formData = new FormData();
    formData.append('type', 'login');
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);

    return fetch('https://allevamentosharpei.it/authentication.php', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let data = responseJson.data;
        if (this.saveToStorage(data)) {
          this.setState({
            validating: false
          });

          /* Redirect to accounts page */
          Actions.pageAccount();
        } else {
          console.log('Failed to store auth');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
	/**
	 * Store auth credentials to device.
	 *
	 */
  async saveToStorage(userData) {
    if (userData) {
      await AsyncStorage.setItem('user', JSON.stringify({
        isLoggedIn: true,
        authToken: userData.auth_token,
        id: userData.user_id,
        name: userData.user_login
      })
      );
      return true;
    }
    return false;
  }

}


const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  bottoni_login_txt: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "YanoneKaffeesatz",
    paddingLeft: 35,
    alignItems: "center",
    paddingRight: 35
  },
  bottoni_login1: {
    backgroundColor: "#646366",
    height: 50,
    width: 130,
    marginRight: 15,
    borderRadius: 5,
    justifyContent: "center"
  },
  bottoni_login2: {
    backgroundColor: "#646366",
    height: 50,
    borderRadius: 5,
    justifyContent: "center"
  },
  bottoni_login3: {
    backgroundColor: "#034ea0",
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  area_btn: {
    flexDirection: "row",
    width: "80%",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    height: "35%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  body_login: {
    height: "35%",
    width: "80%",
    flexDirection: "column"
  },
  payoff: {
    color: "#034ea0",
    fontWeight: "700",
    fontSize: 19,
    letterSpacing: 1,
    fontFamily: "YanoneKaffeesatz",
    marginTop: 8
  }
});
