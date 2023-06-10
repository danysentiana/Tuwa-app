import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";

export default function Account({ navigation }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userInfo = firebase.auth().currentUser;
    setUser(userInfo);
  }, []);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Fail");
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 25 }}>Hello, </Text>
        <TouchableOpacity style={{ width: 307, alignItems: "center", height: 60, backgroundColor: "white", borderRadius: 100, justifyContent: "center", borderWidth: 2 }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>{user.email}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={signOut}>
          <Text style={{ textAlign: "center", justifyContent: "center", fontWeight: "bold", color: "white" }}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  button: {
    width: 307,
    height: 44,
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    marginBottom: 100,
    borderBottomColor: "#ffde00",
    borderBottomWidth: 2,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
});
