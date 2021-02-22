import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Linking } from "react-native";

export default class Aboutscreen extends Component {
  static navigationOptions = {
    drawerLabel: "About",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/about.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>About Screen</Text> */}
        <View style={styles.header}>
          <Text style={styles.headerText}>About App</Text>
        </View>
        <Text>Version: 1.0</Text>
        <Text>{" "}</Text>
        <Text>This is a Demo App to  learn react native!</Text>
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://reactnative.dev/')}>
  Learn More here
</Text>
<Text>{" "}</Text>
        <Image source={require("../assets/scooby.jpg")} style={[styles.image]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    width: 110,
    height: 110,
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26,
  },
});