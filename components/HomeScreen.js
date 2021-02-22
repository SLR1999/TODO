import React, { Component } from "react";
import { StyleSheet, Button, View, Text, Image } from "react-native";
import Main from "./Main";

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
            // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            //   <Text>Home Screen</Text>
            //   <Button
            //     title="Go to About"
            //     onPress={() => this.props.navigation.navigate("About")}
            //   />
            // </View>
            <Main />
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