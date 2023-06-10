import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import firebase from "firebase";

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {},
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("Contact/" + this.props.route.params.id)
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItem = { ...data };

        this.setState({
          contact: contactItem,
        });
      });
  }

  render() {
    const { contact } = this.state;
    return (
      <View style={styles.pages}>
        <Text>Name: </Text>
        <Text style={styles.name}>{contact.name} </Text>
        <Text>Phone Number: </Text>
        <Text style={styles.phone}>{contact.number} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
