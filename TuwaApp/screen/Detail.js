import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import firebase from "firebase";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <View style={styles.card}>
          <Text style={styles.name}>
            <AntDesign name="user" size={20} color="black" /> {contact.name}
          </Text>
          <Text style={styles.phone}>
            <AntDesign name="phone" size={20} color="black" /> {contact.number}{" "}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    paddingBottom: 100,
  },
  card: {
    width: 270,
    backgroundColor: "#ffde00",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 18,
  },
});
