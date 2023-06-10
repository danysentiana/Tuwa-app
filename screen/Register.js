import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const submit = () => {
    const Data = {
      email,
      password,
    };
    console.log(Data);
    // if (password === "12345678") {
    //   setIsError(false);
    //   navigation.navigate("MainApp");
    // } else {
    //   setIsError(true);
    // }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        alert("Regist Success");
        navigation.navigate("Login");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert("Regist Fail", errorMessage);
        // ..
      });
  };
  return (
    <View style={styles.container}>
      <Image style={{ width: 250, height: 250 }} source={require("../../assets/Logoraw.png")}></Image>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 100,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 100,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Password"
          value={password}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity style={styles.Button} onPress={submit}>
          <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ textAlign: "center" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    margin: 20,
    width: 307,
    height: 44,
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 100,
    borderBottomWidth: 2,
    borderColor: "#ffde00",
  },
});
