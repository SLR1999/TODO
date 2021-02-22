import React, { Component } from "react";
import { StyleSheet, Button, View, Text, Image } from "react-native";
import NoteFunctionality from "./NoteFunctionality";

export default class Homescreen extends Component {
    static navigationOptions = {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/home.png")}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <NoteFunctionality />
        );
    }
    // async _cacheResourcesAsync() {
    //   return Asset.loadAsync([require("../assets/home.png")]);
    // }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});