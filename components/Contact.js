import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";

export default class Main extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.contact}>
                <Text style={styles.contactName}>{this.props.val.contact}</Text>
                <Text style={styles.contactName}>{this.props.val.number}</Text>
                {/* <Image source={require("../assets/scooby.jpg")} style={[styles.image]}/> */}

                <TouchableOpacity
                    onPress={this.props.deleteMethod}
                    style={styles.contactDelete}
                >
                    <Text style={styles.contactDeleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contact: {
        position: "relative",
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: "#ededed",
    },
    contactName: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: "#E91E63",
    },
    contactDelete: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2980b9",
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    contactDeleteText: {
        color: "white",
    },
    image: {
        width: 40,
        height: 40,
    },
});