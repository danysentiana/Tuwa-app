import React, { useState, Component } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { InputData } from "../component";
import firebase from "firebase";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
    };
  }

  onChangeText = (nameState, value) => {
    this.setState({
      [nameState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.name && this.state.number) {
      const kontakRef = firebase.database().ref("Contact");
      const kontak = {
        name: this.state.name,
        number: this.state.number,
      };

      kontakRef
        .push(kontak)
        .then((data) => {
          Alert.alert("Success", "Contact saved");
          this.props.navigation.replace("MainApp");
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      Alert.alert("Error", "Please you must fill the empty input form to access");
    }
  };

  render() {
    return (
      <>
        <View style={styles.page}>
          <InputData label="Name" placeholder="Input Name" onChangeText={this.onChangeText} value={this.state.name} nameState="name"></InputData>
          <InputData label="Phone Number" placeholder="Input Phone Number" keyboardType="number-pad" onChangeText={this.onChangeText} value={this.state.number} nameState="number"></InputData>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()}>
            <Text style={{ textAlign: "center", fontWeight: "bold", justifyContent: "center", color: "white" }}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 3,
    padding: 20,
  },

  footer: {
    flex: 1,

    alignItems: "center",
  },
  button: {
    width: 307,
    height: 44,
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ffde00",
  },
});
