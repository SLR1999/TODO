import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Contact from "./Contact";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactArray: [],
            contactName: "",
            contactNum: "",
        };
    }

    render() {
        let contacts = this.state.contactArray.map((val, key) => {
            return (
                <Contact
                    key={key}
                    keyval={key}
                    val={val}
                    deleteMethod={() => this.deleteContact(key)}
                />
            );
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>My Contacts</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        onChangeText={(text) => console.log('searching for ', text)}
                    />
                </View>
                <ScrollView style={styles.scrollContainer}>{contacts}</ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(contactName) => this.setState({ contactName })}
                        value={this.state.contactName}
                        placeholder="New Contact name"
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                    ></TextInput>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(contactNum) => this.setState({ contactNum })}
                        value={this.state.contactNum}
                        placeholder="Contact number"
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                    ></TextInput>
                </View>
                <TouchableOpacity
                    onPress={this.addContact.bind(this)}
                    style={styles.addButton}
                >
                    <Text style={styles.addButtonText}>Add Contact</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addContact() {
        if (this.state.contactName) {
            var d = new Date();
            this.state.contactArray.push({
                number: this.state.contactNum,
                contact: this.state.contactName,
            });
            this.setState({ contactArray: this.state.contactArray });
            this.setState({ contactName: "" });
            this.setState({ contactNum: "" });
        }
    }

    deleteContact(key) {
        this.state.contactArray.splice(key, 1);
        this.setState({ contactArray: this.state.contactArray });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: "stretch",
        color: "#fff",
        padding: 20,
        backgroundColor: "#252525",
        borderTopWidth: 2,
        borderTopColor: "#ededed",
    },
    addButton: {
        position: "absolute",
        zIndex: 11,
        right: 20,
        bottom: 150,
        backgroundColor: "#E91E63",
        width: 150,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 24,
    },
});