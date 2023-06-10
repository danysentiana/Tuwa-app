import React, { Component } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";
import { ValContact } from "../component";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: {},
      contactsKey: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    firebase
      .database()
      .ref("Contact")
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItem = { ...data };

        this.setState({
          contacts: contactItem,
          contactsKey: Object.keys(contactItem),
        });
      });
  }

  removeData = (id) => {
    Alert.alert(
      "Alert",
      "Delete this contact ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            firebase
              .database()
              .ref("Contact/" + id)
              .remove();
            this.getData();
            Alert.alert("Success", "Contact deleted");
          },
        },
      ],
      { cancelable: false }
    );
  };

  render() {
    const { contacts, contactsKey } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Contact List</Text>
        </View>

        <View style={styles.contactListContainer}>
          <View style={styles.contactList}>
            {contactsKey.length > 0 ? contactsKey.map((key) => <ValContact key={key} contactItem={contacts[key]} id={key} {...this.props} removeData={this.removeData} />) : <Text style={{ textAlign: "center" }}>Empty List</Text>}
          </View>
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Contact")}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapperButton: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 20,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contactListContainer: {
    flex: 7,
    justifyContent: "center",
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: "#ffde00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1.5,
  },
});
