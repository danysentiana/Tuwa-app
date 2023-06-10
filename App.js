import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import firebase from "firebase/app";
import TuwaApp from "./TuwaApp/index";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCCdujOzc9GRV5fRaq0Pk3U02GqMInWUbs",
  authDomain: "tuwaapp-ab14c.firebaseapp.com",
  databaseURL: "https://tuwaapp-ab14c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tuwaapp-ab14c",
  storageBucket: "tuwaapp-ab14c.appspot.com",
  messagingSenderId: "668599941157",
  appId: "1:668599941157:web:9161aab5fb3120eeaf27cc",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <StatusBar translucent={false} backgroundColor="trasparent" />
      <TuwaApp></TuwaApp>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
