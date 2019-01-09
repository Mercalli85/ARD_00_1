import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Picker,
  Text,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";

class ComuneScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      state: "Seleziona il comune...",
      pagina: ""
    };
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
        <View style={styles.vistasel}>
          <Text style={styles.h1}>Seleziona il comune:</Text>
          <Picker
            style={styles.pickercomune}
            selectedValue={this.state.pagina}
            onValueChange={pagina => this.setState({ pagina: pagina })}
          >
            <Picker.Item label="acireale" value="acireale" />
            <Picker.Item label="adrano" value="adrano" />
            <Picker.Item label="agrigento" value="agrigento" />
            <Picker.Item label="alcamo" value="alcamo" />
            <Picker.Item label="augusta" value="augusta" />
            <Picker.Item label="avola" value="avola" />
            <Picker.Item label="bagheria" value="bagheria" />
            <Picker.Item
              label="barcellona pozzo di gotto
"
              value="barcellona pozzo di gotto
"
            />
            <Picker.Item label="barrafranca" value="barrafranca" />
            <Picker.Item label="belpasso" value="belpasso" />
            <Picker.Item label="bolognetta" value="bolognetta" />
            <Picker.Item label="borgetto" value="borgetto" />
            <Picker.Item label="bronte" value="bronte" />
            <Picker.Item label="buccheri" value="buccheri" />
            <Picker.Item label="calatabiano" value="calatabiano" />
            <Picker.Item label="caltagirone" value="caltagirone" />
            <Picker.Item label="canicattì" value="canicattì" />
            <Picker.Item
              label="capo d'orlando
"
              value="capo d'orlando
"
            />
            <Picker.Item label="carini" value="carini" />
            <Picker.Item label="carlentini" value="carlentini" />
            <Picker.Item
              label="casole bruzio
"
              value="casole bruzio
"
            />
            <Picker.Item label="cassibile" value="cassibile" />
            <Picker.Item
              label="castel di tusa
"
              value="castel di tusa
"
            />
            <Picker.Item label="castelvetrano" value="castelvetrano" />
            <Picker.Item label="catania" value="Catania" />
            <Picker.Item label="catenanuova" value="catenanuova" />
            <Picker.Item
              label="chiaramonte gulfi
"
              value="chiaramonte gulfi
"
            />
            <Picker.Item label="comiso" value="comiso" />
            <Picker.Item label="cosenza" value="cosenza" />
            <Picker.Item label="cutro" value="cutro" />
            <Picker.Item label="favara" value="favara" />
            <Picker.Item label="floridia" value="floridia" />
            <Picker.Item label="fontanasalsa" value="fontanasalsa" />
            <Picker.Item label="francofonte" value="francofonte" />
            <Picker.Item
              label="giampilieri superiore
"
              value="giampilieri superiore
"
            />
            <Picker.Item label="giarre" value="giarre" />
            <Picker.Item label="grammichele" value="grammichele" />
            <Picker.Item
              label="gravina di catania
"
              value="gravina di catania
"
            />
            <Picker.Item
              label="isola delle femmine
"
              value="isola delle femmine
"
            />
            <Picker.Item label="ispica" value="ispica" />
            <Picker.Item label="lascari" value="lascari" />
            <Picker.Item label="lentini" value="lentini" />
            <Picker.Item label="leonforte" value="leonforte" />
            <Picker.Item label="lipari" value="lipari" />
            <Picker.Item label="maregrosso" value="maregrosso" />
            <Picker.Item
              label="marina di ragusa
"
              value="marina di ragusa
"
            />
            <Picker.Item label="marsala" value="marsala" />
            <Picker.Item
              label="mascalucia
"
              value="mascalucia
"
            />
            <Picker.Item label="mascalucia" value="mascalucia" />
            <Picker.Item label="messina" value="messina" />
            <Picker.Item label="milazzo" value="milazzo" />
            <Picker.Item label="misterbianco" value="misterbianco" />
            <Picker.Item label="modica" value="modica" />
            <Picker.Item label="montapaone" value="montapaone" />
            <Picker.Item label="nicosia" value="nicosia" />
            <Picker.Item label="niscemi" value="niscemi" />
            <Picker.Item label="pachino" value="pachino" />
            <Picker.Item label="palagonia" value="palagonia" />
            <Picker.Item
              label="palazzolo acreide
"
              value="palazzolo acreide
"
            />
            <Picker.Item label="palermo" value="palermo" />
            <Picker.Item label="paola" value="paola" />
            <Picker.Item label="partinico" value="partinico" />
            <Picker.Item
              label="paternò
"
              value="paternò
"
            />
            <Picker.Item label="patti" value="patti" />
            <Picker.Item label="pedara" value="pedara" />
            <Picker.Item label="petrosino" value="petrosino" />
            <Picker.Item
              label="piano tavola
"
              value="piano tavola
"
            />
            <Picker.Item
              label="piazza armerina
"
              value="piazza armerina
"
            />
            <Picker.Item label="pozzallo" value="pozzallo" />
            <Picker.Item label="priolo" value="priolo" />
            <Picker.Item
              label="quattromiglia di rende
"
              value="quattromiglia di rende
"
            />
            <Picker.Item label="raffadali" value="raffadali" />
            <Picker.Item label="ragusa" value="ragusa" />
            <Picker.Item label="ramacca" value="ramacca" />
            <Picker.Item label="randazzo" value="randazzo" />
            <Picker.Item
              label="reggio calabria
"
              value="reggio calabria
"
            />
            <Picker.Item label="roccalumera" value="roccalumera" />
            <Picker.Item
              label="rometta marea
"
              value="rometta marea
"
            />
            <Picker.Item label="rosarno" value="rosarno" />
            <Picker.Item label="rosolini" value="rosolini" />
            <Picker.Item
              label="san filippo del mela
"
              value="san filippo del mela
"
            />
            <Picker.Item
              label="san giuseppe jato
"
              value="san giuseppe jato
"
            />
            <Picker.Item
              label="santa croce camerina
"
              value="santa croce camerina
"
            />
            <Picker.Item
              label="santa margherita
"
              value="santa margherita
"
            />
            <Picker.Item
              label="santa maria la stella
"
              value="santa maria la stella
"
            />
            <Picker.Item
              label="sant'agata militello
"
              value="sant'agata militello
"
            />
            <Picker.Item
              label="santo stefano di camastra
"
              value="santo stefano di camastra
"
            />
            <Picker.Item
              label="santo stefano di rogliano
"
              value="santo stefano di rogliano
"
            />
            <Picker.Item
              label="scaletta zanclea
"
              value="scaletta zanclea
"
            />
            <Picker.Item label="sciacca" value="sciacca" />
            <Picker.Item label="scicli" value="scicli" />
            <Picker.Item label="siracusa" value="siracusa" />
            <Picker.Item
              label="sommatino
"
              value="sommatino
"
            />
            <Picker.Item label="sortino" value="sortino" />
            <Picker.Item label="spadafora" value="spadafora" />
            <Picker.Item
              label="terme vigliatore
"
              value="terme vigliatore
"
            />
            <Picker.Item
              label="termini imerese
"
              value="termini imerese
"
            />
            <Picker.Item
              label="torano castello
"
              value="torano castello
"
            />
            <Picker.Item label="torrenova" value="torrenova" />
            <Picker.Item label="trapani" value="trapani" />
            <Picker.Item label="trappitello" value="trappitello" />
            <Picker.Item
              label="tremestieri etneo
"
              value="tremestieri etneo
"
            />
            <Picker.Item label="villabate" value="villabate" />
            <Picker.Item
              label="villafranca tirrena
"
              value="villafranca tirrena
"
            />
            <Picker.Item label="vittoria" value="vittoria" />
            <Picker.Item label="zafferana etnea" value="zafferana etnea" />
            <Picker.Item label="alì terme" value="alì terme" />
            <Picker.Item label="gliaca di piraino" value="gliaca di piraino" />
          </Picker>
          <TouchableOpacity
            style={styles.bottone}
            onPress={() => this.props.navigation.navigate(this.state.pagina)}
          >
            <Text style={styles.btn_text}>Conferma</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default ComuneScreen;

const styles = StyleSheet.create({
  bottone: {
    backgroundColor: "#fdc700",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 100,
    height: 50,
    width: "50%",
    alignItems: "center"
  },
  btn_text: { fontFamily: "YanoneKaffeesatz", fontSize: 25 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  vistasel: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  pickercomune: {
    height: 150,
    width: "80%"
  },
  h1: { fontFamily: "YanoneKaffeesatz", fontSize: 25 }
});
