import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Main from "./Maincontact";


export default class ContactScreen extends Component {
    static navigationOptions = {
        drawerLabel: "Contact",
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/contact.png")}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            //   <Text>Contact Screen</Text>
            // </View>
            <Main />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});