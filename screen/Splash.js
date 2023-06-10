import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackActions } from "@react-navigation/routers";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("Login"));
    }, 1000);
  });

  return (
    <View style={styles.BG}>
      <Image style={{ width: 200, height: 200 }} source={require("../../assets/Logoraw.png")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  BG: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: 400,
    height: 400,
  },
});
